export class PubSubService<T> {
  private handlers: { [k: string]: (data: T) => void } = {};
  private lastValue?: T;

  private _generateSubscriptionId(_step?: number): string {
    let subscriptionId = `${new Date().getTime()}_${Math.round(
      Math.random() * 1000000,
    )}`;

    if (typeof this.handlers[subscriptionId] !== 'undefined') {
      const step = _step || 0;
      if (step > 500) {
        throw new Error('Max stack for creating subscription Id');
      }

      subscriptionId = this._generateSubscriptionId(step + 1);
    }

    return subscriptionId;
  }

  private _setLastValue(value: T): void {
    this.lastValue = value;
  }

  getLastValue(): T | undefined {
    return this.lastValue;
  }

  publish(data: T): void {
    this._setLastValue(data);

    for (const subscriptionId in this.handlers) {
      if (typeof this.handlers[subscriptionId] === 'function') {
        this.handlers[subscriptionId](data);
      }
    }
  }

  subscribe(handler: (data: T) => void): string {
    const subscriptionId = this._generateSubscriptionId();

    this.handlers[subscriptionId] = handler;

    return subscriptionId;
  }

  revoke(subscriptionId: string): void {
    delete this.handlers[subscriptionId];
  }
}
