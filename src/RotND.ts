
// RotND.ts — utilidades de rotación N‑dimensional usando rotaciones de Givens.
export class RotND {
  readonly N: number;
  private R: Float32Array;  // matriz N×N, row-major

  constructor(N: number) {
    this.N = N;
    this.R = new Float32Array(N * N);
    for (let i = 0; i < N; i++) this.R[i * N + i] = 1;
  }

  reset() {
    this.R.fill(0);
    for (let i = 0; i < this.N; i++) this.R[i * this.N + i] = 1;
  }

  get matrix(): Float32Array {
    return this.R;
  }

  // Aplica a la izquierda: R := G(i,j,theta) * R (rota las FILAS i y j).
  applyGivensLeft(i: number, j: number, theta: number) {
    if (i === j) return;
    const N = this.N;
    const c = Math.cos(theta), s = Math.sin(theta);
    for (let k = 0; k < N; k++) {
      const Rik = this.R[i * N + k], Rjk = this.R[j * N + k];
      this.R[i * N + k] = c * Rik - s * Rjk;
      this.R[j * N + k] = s * Rik + c * Rjk;
    }
  }

  // Opción: re‑ortonormalizar (poco frecuente). Gram-Schmidt modificado.
  reorthonormalize() {
    const N = this.N, R = this.R;
    // columnas no cambian aquí; trabajamos sobre filas (vectores base).
    for (let i = 0; i < N; i++) {
      // proyección fuera de filas previas
      for (let j = 0; j < i; j++) {
        let dot = 0;
        for (let k = 0; k < N; k++) dot += R[i * N + k] * R[j * N + k];
        for (let k = 0; k < N; k++) R[i * N + k] -= dot * R[j * N + k];
      }
      // normalizar
      let norm = 0;
      for (let k = 0; k < N; k++) norm += R[i * N + k] * R[i * N + k];
      norm = Math.sqrt(norm);
      const inv = norm > 1e-8 ? 1 / norm : 1;
      for (let k = 0; k < N; k++) R[i * N + k] *= inv;
    }
  }
}

export type Plane = { i: number; j: number; theta: number; auto: boolean; speed: number; _lastTheta?: number; }
