// Browser shim for node:async_hooks
export class AsyncLocalStorage<T = any> {
  private _store: T | undefined = undefined;

  getStore(): T | undefined {
    return this._store;
  }

  run<R>(store: T, callback: () => R): R {
    const prev = this._store;
    this._store = store;
    try {
      return callback();
    } finally {
      this._store = prev;
    }
  }

  enterWith(store: T): void {
    this._store = store;
  }

  disable(): void {
    this._store = undefined;
  }
}

export default {
  AsyncLocalStorage,
};
