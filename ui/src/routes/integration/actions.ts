import { action } from "@solidjs/router";
import { Cache } from "~/lib/cache";

/**
 * Server action to invalidate cache and refresh data
 */
export const refreshCacheAction = action(async ({ cycleNumber }) => {
  "use server";
  try {
    const cacheKey = `integration:prStats:cycle:${cycleNumber}`;
    await Cache.delete(cacheKey);
    console.log(`Cleared cache for key: ${cacheKey}`);
    return { success: true, message: "Cache refreshed successfully!" };
  } catch (error) {
    console.error("Failed to refresh cache:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to refresh cache"
    };
  }
}, "refresh-cache-action");