import { database as db } from "@peepr/infrastructure";
import { Cache } from "./cache";

export const database = {
  user: {
    async create({ data }: { data: { username: string; password: string } }) {
      try {
        const user = await db.userRepository.create({ data });

        // Invalidate user cache
        await Cache.delete(`user:${user.id}`);
        await Cache.delete(`user:username:${user.username}`);

        return user;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },

    async findUnique({
      where: { username = undefined, id = undefined },
    }: { where: { username?: string; id?: number | string } }) {
      // Cache key based on query type
      const cacheKey = id !== undefined ? `user:${id}` : `user:username:${username}`;

      return Cache.getOrSet(
        cacheKey,
        async () => {
          return await db.userRepository.findUnique({ where: { username, id } });
        },
        60 * 60 * 24, // Cache user data for 24 hours
      );
    },
  },
};
