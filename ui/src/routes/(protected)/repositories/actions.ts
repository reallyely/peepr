import { action } from "@solidjs/router";
import { Cache } from "~/lib/cache";
import { repositoriesCacheKey } from "./queries.ts";

/**
 * Server action to invalidate all repository-related cache
 */
export const refreshRepositoriesCacheAction = action(async () => {
  "use server";
  try {
    // Clear user repositories cache
    await Cache.delete(repositoriesCacheKey());
    console.log(`Cleared cache for key: ${repositoriesCacheKey()}`);

    // Clear pattern-based cache for organization repositories and individual repos
    await Cache.clearPattern("repositories:org:*");
    await Cache.clearPattern("repository:*");

    console.log("Cleared all repository-related cache patterns");

    return { success: true, message: "Repository cache refreshed successfully!" };
  } catch (error) {
    console.error("Failed to refresh repository cache:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to refresh repository cache",
    };
  }
}, "refresh-repositories-cache-action");
