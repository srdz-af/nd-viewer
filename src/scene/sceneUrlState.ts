const SCENE_URL_STATE_KEY = 's';
const COMPRESSED_PREFIX = 'd';
const JSON_PREFIX = 'j';
const BYTE_STRING_CHUNK_SIZE = 0x8000;

function bytesToBinaryString(bytes: Uint8Array) {
  let binary = '';
  for (let i = 0; i < bytes.length; i += BYTE_STRING_CHUNK_SIZE) {
    const chunk = bytes.subarray(i, i + BYTE_STRING_CHUNK_SIZE);
    let part = '';
    for (let j = 0; j < chunk.length; j++) part += String.fromCharCode(chunk[j]);
    binary += part;
  }
  return binary;
}

export function bytesToBase64Url(bytes: Uint8Array) {
  return btoa(bytesToBinaryString(bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/u, '');
}

export function base64UrlToBytes(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function alignedBuffer(bytes: Uint8Array) {
  const buffer = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(buffer).set(bytes);
  return buffer;
}

export function packF32(values: Float32Array) {
  return bytesToBase64Url(new Uint8Array(values.buffer, values.byteOffset, values.byteLength));
}

export function unpackF32(value: string) {
  return new Float32Array(alignedBuffer(base64UrlToBytes(value)));
}

export function packU32(values: Uint32Array) {
  return bytesToBase64Url(new Uint8Array(values.buffer, values.byteOffset, values.byteLength));
}

export function unpackU32(value: string) {
  return new Uint32Array(alignedBuffer(base64UrlToBytes(value)));
}

export function packU16(values: Uint16Array) {
  return bytesToBase64Url(new Uint8Array(values.buffer, values.byteOffset, values.byteLength));
}

export function unpackU16(value: string) {
  return new Uint16Array(alignedBuffer(base64UrlToBytes(value)));
}

async function transformBytes(bytes: Uint8Array, ctorName: 'CompressionStream' | 'DecompressionStream') {
  const StreamCtor = (globalThis as {
    CompressionStream?: new (format: string) => GenericTransformStream;
    DecompressionStream?: new (format: string) => GenericTransformStream;
  })[ctorName];
  if (!StreamCtor) return null;

  try {
    const stream = new Blob([alignedBuffer(bytes)]).stream().pipeThrough(new StreamCtor('deflate'));
    return new Uint8Array(await new Response(stream).arrayBuffer());
  } catch {
    return null;
  }
}

export async function encodeSceneUrlPayload(state: unknown) {
  const jsonBytes = new TextEncoder().encode(JSON.stringify(state));
  const compressed = await transformBytes(jsonBytes, 'CompressionStream');
  if (compressed && compressed.byteLength < jsonBytes.byteLength) {
    return `${COMPRESSED_PREFIX}${bytesToBase64Url(compressed)}`;
  }
  return `${JSON_PREFIX}${bytesToBase64Url(jsonBytes)}`;
}

export async function decodeSceneUrlPayload(payload: string) {
  if (!payload) return null;
  const prefix = payload[0];
  const encoded = payload.slice(1);
  if (!encoded) return null;

  try {
    const bytes = base64UrlToBytes(encoded);
    const decoded = prefix === COMPRESSED_PREFIX
      ? await transformBytes(bytes, 'DecompressionStream')
      : bytes;
    if (!decoded) return null;
    return JSON.parse(new TextDecoder().decode(decoded)) as unknown;
  } catch {
    return null;
  }
}

export function readScenePayloadFromUrl(url = window.location.href) {
  const parsed = new URL(url);
  const hash = parsed.hash.startsWith('#') ? parsed.hash.slice(1) : parsed.hash;
  if (!hash) return null;
  return new URLSearchParams(hash).get(SCENE_URL_STATE_KEY);
}

export function readScenePayloadFromText(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    return readScenePayloadFromUrl(trimmed);
  } catch {
    // Not a URL; try the saved hash/query fragment or the raw payload.
  }

  const params = new URLSearchParams(trimmed.startsWith('#') ? trimmed.slice(1) : trimmed);
  const payload = params.get(SCENE_URL_STATE_KEY);
  if (payload) return payload;
  return /^[dj][A-Za-z0-9_-]+$/u.test(trimmed) ? trimmed : null;
}

export function createSceneUrlWithPayload(payload: string, url = window.location.href) {
  const parsed = new URL(url);
  parsed.hash = `${SCENE_URL_STATE_KEY}=${payload}`;
  return parsed.toString();
}

export function clearScenePayloadFromCurrentUrl() {
  if (!readScenePayloadFromUrl()) return;
  const url = new URL(window.location.href);
  url.hash = '';
  window.history.replaceState(null, document.title, url);
}
