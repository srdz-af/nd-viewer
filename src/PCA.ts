// X is stored by dimension: X[d * M + m].
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
  // Covariance: C = (1 / M) * Xc * Xc^T.
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

  const components: number[][] = [];

  for (let t = 0; t < k; t++) {
    const { eigenvalue, eigenvector } = powerIterEigen(C, N, 1000, 1e-6);
    if (!Number.isFinite(eigenvalue) || Math.abs(eigenvalue) < 1e-10) break;
    components.push(eigenvector);

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        C[i * N + j] -= eigenvalue * eigenvector[i] * eigenvector[j];
      }
    }
  }

  while (components.length < k) {
    components.push(fallbackBasisVector(N, components.length));
  }

  const P = new Float32Array(k * N);
  for (let t = 0; t < k; t++) {
    for (let d = 0; d < N; d++) P[t * N + d] = components[t][d] ?? 0;
  }
  return { P, mean };
}

function powerIterEigen(C: Float32Array, N: number, maxIter: number, tol: number) {
  const v = new Float32Array(N);
  for (let i = 0; i < N; i++) v[i] = Math.random() - 0.5;
  normalize(v);
  let lambdaOld = 0;
  for (let it = 0; it < maxIter; it++) {
    const w = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      let acc = 0;
      for (let j = 0; j < N; j++) acc += C[i * N + j] * v[j];
      w[i] = acc;
    }
    const lambda = dot(v, w);
    if (!normalize(w)) return { eigenvalue: 0, eigenvector: fallbackBasisVector(N, 0) };

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

function fallbackBasisVector(N: number, index: number) {
  const v = Array.from({ length: N }, () => 0);
  if (N > 0) v[index % N] = 1;
  return v;
}

function dot(a: Float32Array, b: Float32Array) {
  let acc = 0;
  for (let i = 0; i < a.length; i++) acc += a[i] * b[i];
  return acc;
}

function normalize(v: Float32Array) {
  let n2 = 0;
  for (let i = 0; i < v.length; i++) n2 += v[i] * v[i];
  if (n2 <= 1e-12) return false;
  const inv = 1 / Math.sqrt(n2);
  for (let i = 0; i < v.length; i++) v[i] *= inv;
  return true;
}
