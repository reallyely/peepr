import { User } from "@peepr/core";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

const storage = createStorage({
  driver: fsLiteDriver({
    base: "./.data"
  })
});
storage.setItem("users:data", [User.create({ id: 0, username: "lol", password: "roflmao" }).toJSON()]);
storage.setItem("users:counter", 1);

export const db = {
  user: {
    async create({ data }: { data: { username: string; password: string } }) {
      const [{ value: users }, { value: index }] = await storage.getItems(["users:data", "users:counter"]);
      const user = User.create({
        id: Number(index),
        password: data.password,
        username: data.username
      });

      await Promise.all([
        storage.setItem("users:data", [...(users as Array<User>), user]),
        storage.setItem("users:counter", index as number + 1)
      ]);
      return user;
    },
    async findUnique({ where: { username = undefined, id = undefined } }: { where: { username?: string; id?: number } }) {
      const rawUsers = await storage.getItem<User[]>("users:data");
      const users = rawUsers.map(userData => User.create(userData));

      if (id !== undefined) {
        return users.find(user => user.id === id);
      }
      return users.find(user => user.username === username);
    }
  }
};
