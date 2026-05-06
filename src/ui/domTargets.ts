export function isTextEntryTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

export function isPlainTextEditTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  if (target instanceof HTMLTextAreaElement) return true;
  if (target instanceof HTMLInputElement) {
    const type = (target.type || 'text').toLowerCase();
    return type === 'text'
      || type === 'search'
      || type === 'url'
      || type === 'tel'
      || type === 'email'
      || type === 'password'
      || type === 'number';
  }
  return false;
}
