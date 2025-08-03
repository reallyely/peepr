import type { ID } from "#/model/ID.ts";

export interface EntityConstructorParams<T> {
  id: ID;
  data: T;
}

export abstract class Entity<T = unknown> {
  private readonly _id: ID;
  private readonly _data: T;

  constructor(config: EntityConstructorParams<T>) {
    this._id = config.id;
    this._data = config.data;
  }

  public get id(): ID {
    return this._id;
  }

  public get data(): T { return this._data }

  public equals(other: Entity<T>): boolean {
    return this.id.equals(other.id);
  }

  public abstract toJSON(): string;
}
