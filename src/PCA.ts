
// PCA.ts — PCA simple (top-k) via potencia + deflación sobre la covarianza.
// X: N×M (row-major por dimensión: bloque por dimensión), es decir X[d*M + m].
export function pcaTopK(X: Float32Array, N: number, M: number, k: number) {
  const mean = new Float32Array(N);
  for (let d = 0; d < N; d++) {
    let sum = 0;
    for (let m = 0; m < M; m++) sum += X[d * M + m];
    mean[d] = sum / M;
  }
  const Xc = new Float32Array(N * M);
  for (let d = 0; d < N; d++) {
    const mu = mean[d];
    for (let m = 0; m < M; m++) Xc[d * M + m] = X[d * M + m] - mu;
  }
  // Covarianza C = (1/M) Xc * Xc^T  (N×N).
  const C = new Float32Array(N * N);
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let acc = 0;
      for (let m = 0; m < M; m++) acc += Xc[i * M + m] * Xc[j * M + m];
      const val = acc / M;
      C[i * N + j] = val;
      if (i !== j) C[j * N + i] = val;
    }
  }

  const vecs: number[] = [];
  const evals: number[] = [];

  for (let t = 0; t < k; t++) {
    const { eigenvalue, eigenvector } = powerIterEigen(C, N, 1000, 1e-6);
    if (!isFinite(eigenvalue)) break;
    evals.push(eigenvalue);
    vecs.push(...eigenvector);
    // Deflación: C := C - λ v v^T
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        C[i * N + j] -= eigenvalue * eigenvector[i] * eigenvector[j];
      }
    }
  }

  // Devolver P con filas = vectores principales (k×N) en row‑major.
  const P = new Float32Array(k * N);
  for (let t = 0; t < k; t++) {
    for (let d = 0; d < N; d++) P[t * N + d] = vecs[t * N + d];
  }
  return { P, mean };
}

function powerIterEigen(C: Float32Array, N: number, maxIter: number, tol: number) {
  // v aleatorio
  const v = new Float32Array(N);
  for (let i = 0; i < N; i++) v[i] = Math.random() - 0.5;
  normalize(v);
  let lambdaOld = 0;
  for (let it = 0; it < maxIter; it++) {
    // w = C v
    const w = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let acc = 0;
      for (let j = 0; j < N; j++) acc += C[i * N + j] * v[j];
      w[i] = acc;
    }
    const lambda = dot(v, w);
    normalize(w);
    // comprobar convergencia
    let diff = 0;
    for (let i = 0; i < N; i++) {
      const d = w[i] - v[i];
      diff += d * d;
    }
    v.set(w);
    if (Math.abs(lambda - lambdaOld) < tol && diff < tol) {
      return { eigenvalue: lambda, eigenvector: Array.from(v) };
    }
    lambdaOld = lambda;
  }
  return { eigenvalue: lambdaOld, eigenvector: Array.from(v) };
}

function dot(a: Float32Array, b: Float32Array) {
  let acc = 0;
  for (let i = 0; i < a.length; i++) acc += a[i] * b[i];
  return acc;
}

function normalize(v: Float32Array) {
  let n2 = 0;
  for (let i = 0; i < v.length; i++) n2 += v[i] * v[i];
  const inv = n2 > 1e-12 ? 1 / Math.sqrt(n2) : 1;
  for (let i = 0; i < v.length; i++) v[i] *= inv;
}
