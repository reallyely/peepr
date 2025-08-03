import { Entity, type EntityConstructorParams, ID } from "@peepr/core";

interface RepositoryCreate {
  id?: string | number;
  name: string;
  description?: string;
  language?: string;
  createdDate: Date | string;
  updatedDate: Date | string;
  owner?: string;
}

interface RepositoryData {
  id: number | string;
  name: string;
  description?: string;
  language?: string;
  createdDate: Date;
  updatedDate: Date;
  owner: string;
}

/**
 * Represents a code repository
 */
export class Repository extends Entity<RepositoryData> {

  static create(data: RepositoryCreate): Repository {
    try {
      // Validate required fields
      if (!data.name || typeof data.name !== "string") {
        throw new Error("Repository name is required and must be a string");
      }

      if (!data.owner || typeof data.owner !== "string") {
        throw new Error("Repository owner is required and must be a string");
      }

      // Convert date strings to Date objects if needed
      const createdDate = data.createdDate instanceof Date ? data.createdDate : new Date(data.createdDate);
      const updatedDate = data.updatedDate instanceof Date ? data.updatedDate : new Date(data.updatedDate);

      // Validate dates
      if (Number.isNaN(createdDate.getTime())) {
        throw new Error("Invalid created date");
      }

      if (Number.isNaN(updatedDate.getTime())) {
        throw new Error("Invalid updated date");
      }

      return new Repository({
        id: ID.create(data.id),
        data: {
          id: data.id,
          name: data.name,
          description: data.description,
          language: data.language,
          createdDate: createdDate,
          updatedDate: updatedDate,
          owner: data.owner,
        }
      });
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  /**
   * Checks if the repository was recently updated (within the last 30 days)
   */
  isRecentlyUpdated(): boolean {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return this.data.updatedDate > thirtyDaysAgo;
  }

  /**
   * Gets the age of the repository in days
   */
  getAgeInDays(): number {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - this.data.createdDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Returns a summary of the repository
   */
  getSummary(): string {
    const age = this.getAgeInDays();
    const recentlyUpdated = this.isRecentlyUpdated() ? "recently updated" : "not recently updated";
    return `Repository "${this.data.name}" (${this.data.language}) owned by ${this.data.owner}, created ${age} days ago and ${recentlyUpdated}.`;
  }

  public toJSON(): string {
    return JSON.stringify({
      id: this.id.toString(),
      name: this.data.name,
      description: this.data.description,
      language: this.data.language,
      createdDate: this.data.createdDate.toISOString(),
      updatedDate: this.data.updatedDate.toISOString(),
      owner: this.data.owner,
    });
  }

  get name(): string {
    return this.data.name;
  }

  get description(): string | undefined {
    return this.data.description;
  }

  get language(): string | undefined {
    return this.data.language;
  }

  get owner(): string | undefined {
    return this.data.owner;
  }
}
