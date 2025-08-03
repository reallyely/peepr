export abstract class ValueObject<T> {
  private readonly _value: T;
  constructor(
    value: T,
  ) {
    this._value = value
  }

  get value(): T {
    return this._value;
  }

  protected getValue(): T {
    return this.value;
  }

  public equals(otherValue: T) {
    return this.value === otherValue
  }
}
