export class RotND {
  readonly N: number;
  private R: Float32Array;

  constructor(N: number) {
    this.N = N;
    this.R = new Float32Array(N * N);
    for (let i = 0; i < N; i++) this.R[i * N + i] = 1;
  }

  reset(): void {
    this.R.fill(0);
    for (let i = 0; i < this.N; i++) this.R[i * this.N + i] = 1;
  }

  get matrix(): Float32Array {
    return this.R;
  }

  // Left-apply a Givens rotation: R := G(i, j, theta) * R.
  applyGivensLeft(i: number, j: number, theta: number): void {
    if (i === j) return;
    const N = this.N;
    const c = Math.cos(theta), s = Math.sin(theta);
    for (let k = 0; k < N; k++) {
      const Rik = this.R[i * N + k], Rjk = this.R[j * N + k];
      this.R[i * N + k] = c * Rik - s * Rjk;
      this.R[j * N + k] = s * Rik + c * Rjk;
    }
  }

  reorthonormalize(): void {
    const N = this.N, R = this.R;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < i; j++) {
        let dot = 0;
        for (let k = 0; k < N; k++) dot += R[i * N + k] * R[j * N + k];
        for (let k = 0; k < N; k++) R[i * N + k] -= dot * R[j * N + k];
      }

      let norm = 0;
      for (let k = 0; k < N; k++) norm += R[i * N + k] * R[i * N + k];
      norm = Math.sqrt(norm);
      const inv = norm > 1e-8 ? 1 / norm : 1;
      for (let k = 0; k < N; k++) R[i * N + k] *= inv;
    }
  }
}

export type Plane = {
  i: number;
  j: number;
  theta: number;
  auto: boolean;
  speed: number;
  _lastTheta?: number;
};
