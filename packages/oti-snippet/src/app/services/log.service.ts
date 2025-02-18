export class LogService {
  private debug = false;

  log(...args: unknown[]): void {
    if (this.debug) {
      console.log.apply(this, args);
    }
  }

  setDebug(debug: boolean): void {
    this.debug = debug;
  }
}
