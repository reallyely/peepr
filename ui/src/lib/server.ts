import { useSession } from "vinxi/http";
import { Cache } from "./cache";
import { database } from "./db";

export async function login(username: string, password: string) {
  const user = await database.user.findUnique({ where: { username } });
  if (!user || password !== user.password) throw new Error("Invalid login");
  return user;
}

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
  const existingUser = await database.user.findUnique({ where: { username } });
  if (existingUser) throw new Error("User already exists");

  return database.user.create({
    data: { username: username, password },
  });
}

export function getSession() {
  return useSession({
    password: process.env.SESSION_SECRET ?? "areallylongsecretthatyoushouldreplace",
  });
}
