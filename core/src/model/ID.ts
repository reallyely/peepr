export class ID {
  private readonly value: string;

  private constructor(value?: string | number) {
    if (value === undefined) {
      // Generate a new UUID if no value is provided
      this.value = crypto.randomUUID();
    } else if (typeof value === "string") {
      // Use the provided string value
      this.value = value;
    } else if (typeof value === "number") {
      // Convert number to string
      this.value = value.toString();
    } else {
      throw new Error("ID must be a string or number");
    }
  }

  /**
   * Creates a new ID, either with the provided value or generates a new UUID
   */
  static create(value?: string | number | ID): ID {
    if (value instanceof ID) return value;

    return new ID(value);
  }

  /**
   * Returns the string representation of this ID
   */
  toString(): string {
    return this.value;
  }

  /**
   * Compares this ID to another ID
   */
  equals(other: ID): boolean {
    return this.value === other.value;
  }

  /**
   * Returns the string representation of this ID when serialized to JSON
   */
  toJSON(): string {
    return this.value;
  }
}
