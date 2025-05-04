import { ID } from "./ID.ts";

export type UserCreationError = Error;
export class User {
  readonly id: ID;
  readonly username: string;
  readonly password: string;

  constructor(id: ID, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  static validateUsername(username: unknown): string {
    if (typeof username !== "string" || username.length < 3) {
      throw new Error("Usernames must be at least 3 characters long");
    }
    return username;
  }

  static validatePassword(password: unknown): string {
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Passwords must be at least 6 characters long");
    }
    return password;
  }

  static create(data: {
    id?: string | number;
    username: string;
    password: string;
  }): User {
    try {
      User.validateUsername(data.username);
      User.validatePassword(data.password);

      return new User(ID.create(data.id), data.username, data.password);
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  public toJSON(): { id: string; username: string; password: string } {
    return {
      id: this.id.toString(),
      username: this.username,
      password: this.password,
    };
  }
}
