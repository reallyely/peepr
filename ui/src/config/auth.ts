import GitHub from "@auth/core/providers/github";
import type { SolidAuthConfig } from "@auth/solid-start";


/**
 * @link https://authjs.dev/getting-started/authentication/oauth
 */
export const authOpts: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  /**  https://stackoverflow.com/questions/77871561/error-unknownaction-cannot-parse-action-at-api-auth-session */
  basePath: "/api/auth",
  debug: process.env.DEBUG === "true",
};
