import Redis from "ioredis";

// Initialize Redis client
const redis = new Redis(
	Number(process.env.REDIS_PORT),
	process.env.REDIS_URL_HOST,
	{
		username: process.env.REDIS_USERNAME,
		password: process.env.REDIS_PASSWORD,
		family: 6,
	},
);

// Define default TTL values (in seconds)
const DEFAULT_TTL = 60 * 60 * 24 * 180; // 180 days
const TTL_CONFIG = {
	pullRequests: DEFAULT_TTL,
	integration: DEFAULT_TTL,
	user: 60 * 60 * 24,
};

/**
 * Cache utility class for handling Redis operations
 */
export const Cache = {
	/**
	 * Get data from cache
	 * @param key - Cache key
	 * @returns The cached data or null if not found
	 */
	async get<T>(key: string): Promise<T | null> {
		try {
			const data = await redis.get(key);
			return data ? JSON.parse(data) : null;
		} catch (error) {
			console.error(`Error fetching from cache: ${error}`);
			return null;
		}
	},

	/**
	 * Set data in cache
	 * @param key - Cache key
	 * @param data - Data to cache
	 * @param ttl - Time to live in seconds (optional)
	 */
	async set(key: string, data: unknown, ttl?: number): Promise<void> {
		try {
			// Determine TTL based on key prefix or use default
			const keyPrefix = key.split(":")[0];
			const expiry =
				ttl || TTL_CONFIG[keyPrefix as keyof typeof TTL_CONFIG] || DEFAULT_TTL;

			await redis.set(key, JSON.stringify(data), "EX", expiry);
		} catch (error) {
			console.error(`Error setting cache: ${error}`);
		}
	},

	/**
	 * Delete a key from cache
	 * @param key - Cache key to delete
	 */
	async delete(key: string): Promise<void> {
		try {
			await redis.del(key);
		} catch (error) {
			console.error(`Error deleting from cache: ${error}`);
		}
	},

	/**
	 * Clear all keys matching a pattern
	 * @param pattern - Pattern to match (e.g., "pullRequests:*")
	 */
	async clearPattern(pattern: string): Promise<void> {
		try {
			const keys = await redis.keys(pattern);
			if (keys.length > 0) {
				await redis.del(...keys);
			}
		} catch (error) {
			console.error(`Error clearing cache pattern: ${error}`);
		}
	},

	/**
	 * Get data with cache. If not in cache, fetch using the dataFn and store in cache.
	 * @param key - Cache key
	 * @param dataFn - Function to fetch data if not in cache
	 * @param ttl - Optional TTL in seconds
	 * @param forceFresh - Force fresh data fetch even if cached
	 */
	async getOrSet<T>(
		key: string,
		dataFn: () => Promise<T>,
		ttl?: number,
		forceFresh = false,
	): Promise<T> {
		if (!forceFresh) {
		const cachedData = await Cache.get<T>(key);
		if (cachedData !== null) {
				return cachedData;
			}
			const freshData = await dataFn();
			await this.set(key, freshData, ttl);
			return freshData;
		}

		const freshData = await dataFn();
		await this.set(key, freshData, ttl);
		return freshData;
	},
};
