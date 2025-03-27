import { User } from '@peepr/core'
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { Cache } from "./cache";

const storage = createStorage({
  driver: fsLiteDriver({
    base: "./.data",
  }),
});
storage.setItem("users:data", [
  User.create({ id: 0, username: "lol", password: "roflmao" }).toJSON(),
]);
storage.setItem("users:counter", 1);

export const db = {
  user: {
    async create({ data }: { data: { username: string; password: string } }) {
      const [{ value: users }, { value: index }] = await storage.getItems([
        "users:data",
        "users:counter",
      ]);
      const user = User.create({
        id: Number(index),
        password: data.password,
        username: data.username,
      });

      await Promise.all([
        storage.setItem("users:data", [...(users as Array<User>), user]),
        storage.setItem("users:counter", (index as number) + 1),
      ]);

      // Invalidate user cache
      await Cache.delete(`user:${user.id}`);
      await Cache.delete(`user:username:${user.username}`);

      return user;
    },
    async findUnique({
      where: { username = undefined, id = undefined },
    }: { where: { username?: string; id?: number } }) {
      // Cache key based on query type
      const cacheKey =
        id !== undefined ? `user:${id}` : `user:username:${username}`;

      return Cache.getOrSet(
        cacheKey,
        async () => {
          const rawUsers = await storage.getItem<User[]>("users:data");
          const users = rawUsers.map((userData) => User.create(userData));

          if (id !== undefined) {
            return users.find((user) => user.id === id);
          }
          return users.find((user) => user.username === username);
        },
        60 * 60 * 24,
      ); // Cache user data for 24 hours
    },
  },
};
