import { User as CoreUser } from "@peepr/core";
import { eq } from 'drizzle-orm';
import { db } from './connection.ts';
import { type User as DbUser, users } from './schema.ts';

export const userRepository = {
  async create({ data }: { data: { username: string; password: string } }) {
    try {
      // Create core user to validate the data
      const coreUser = CoreUser.create({
        username: data.username,
        password: data.password,
      });

      // Insert into database
      const [dbUser] = await db.insert(users).values(coreUser.toJSON()).returning();
      console.log({ dbUser })

      return coreUser;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  async findUnique({
    where: { username = undefined, id = undefined },
  }: { where: { username?: string; id?: number | string } }) {
    try {
      let dbUser: DbUser | undefined;

      if (id !== undefined) {
        const idString = typeof id === 'number' ? id.toString() : id;
        const result = await db.select().from(users).where(eq(users.id, idString)).limit(1);
        dbUser = result[0];
      } else if (username !== undefined) {
        const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
        dbUser = result[0];
      }

      return dbUser ? CoreUser.create(dbUser) : undefined;
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  },
};
