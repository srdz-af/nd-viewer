export function canonicalP(N: number): Float32Array {
  const P = new Float32Array(3 * N);
  P[0] = 1;
  if (N > 1) P[N + 1] = 1;
  if (N > 2) P[2 * N + 2] = 1;
  return P;
}

export class NDProjector {
  N: number;
  P: Float32Array;
  R: Float32Array;
  private tmp!: Float32Array;

  constructor(N: number, R: Float32Array, P = canonicalP(N)) {
    this.N = N;
    this.R = R;
    this.P = P;
  }

  resizeBuffers(M: number): void {
    if (!this.tmp || this.tmp.length !== this.N * M) {
      this.tmp = new Float32Array(this.N * M);
    }
  }

  setCanonicalP(): void {
    this.P = canonicalP(this.N);
  }

  setCustomP(P: Float32Array): void {
    if (P.length !== 3 * this.N) throw new Error('Projection matrix must be 3xN');
    this.P = P;
  }

  project(X: Float32Array, M: number, out3: Float32Array): void {
    this.resizeBuffers(M);
    const { N, tmp, R, P } = this;

    for (let m = 0; m < M; m++) {
      for (let r = 0; r < N; r++) {
        let acc = 0;
        for (let k = 0; k < N; k++) acc += R[r * N + k] * X[k * M + m];
        tmp[r * M + m] = acc;
      }
    }

    for (let m = 0; m < M; m++) {
      for (let r3 = 0; r3 < 3; r3++) {
        let acc = 0;
        for (let k = 0; k < N; k++) acc += P[r3 * N + k] * tmp[k * M + m];
        out3[r3 * M + m] = acc;
      }
    }
  }
}
