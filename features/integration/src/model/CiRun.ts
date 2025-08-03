import { Entity, ID } from "@peepr/core";

export interface CiRunProps {
  id: string;
  name: string;
}
export class CIRun extends Entity<CiRunProps> {

  create({ id, name }: CiRunProps) {
    return new CIRun(id, name);
  }

  constructor(id: string, name: string) {
    super({ id: ID.create(id), data: { id, name } });
  }

  public toJSON(): string {
    return JSON.stringify(this.data);
  }

}
