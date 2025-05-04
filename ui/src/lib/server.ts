import { User } from "@peepr/core";
import { useSession } from "vinxi/http";
import { db } from "./db";

export async function login(username: string, password: string) {
  const user = await db.user.findUnique({ where: { username } });
  if (!user || password !== user.password) throw new Error("Invalid login");
  return user;
}

import { Cache } from "./cache";

export async function logout() {
  const session = await getSession();

  // Get the user ID before clearing it from session
  const userId = session.data.userId;

  await session.update((d) => {
    d.userId = undefined;
  });

  // Invalidate user session cache if we had a userId
  if (userId !== undefined) {
    await Cache.delete(`user:${userId}`);
  }
}

export async function register(username: string, password: string) {
  const user = User.create({ username, password });
  const existingUser = await db.user.findUnique({ where: { username } });
  if (existingUser) throw new Error("User already exists");

  return db.user.create({
    data: { username: username, password },
  });
}

export function getSession() {
  return useSession({
    password: process.env.SESSION_SECRET ?? "areallylongsecretthatyoushouldreplace",
  });
}
