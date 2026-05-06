type SceneHistoryOptions<TSnapshot> = {
  capture: () => TSnapshot;
  apply: (snapshot: TSnapshot) => void;
  maxEntries?: number;
};

export class SceneHistory<TSnapshot> {
  private readonly undoStack: TSnapshot[] = [];
  private readonly redoStack: TSnapshot[] = [];
  private readonly maxEntries: number;

  constructor(private readonly options: SceneHistoryOptions<TSnapshot>) {
    this.maxEntries = options.maxEntries ?? 20;
  }

  push() {
    this.undoStack.push(this.options.capture());
    if (this.undoStack.length > this.maxEntries) this.undoStack.shift();
    this.redoStack.length = 0;
  }

  undo() {
    const snapshot = this.undoStack.pop();
    if (!snapshot) return;
    this.redoStack.push(this.options.capture());
    this.options.apply(snapshot);
  }

  redo() {
    const snapshot = this.redoStack.pop();
    if (!snapshot) return;
    this.undoStack.push(this.options.capture());
    this.options.apply(snapshot);
  }
}
