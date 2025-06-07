import GitHub from "@auth/core/providers/github";
import type { SolidAuthConfig } from "@auth/solid-start";


/**
 * @link https://authjs.dev/getting-started/authentication/oauth
 */
export const authOpts: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  /**  https://stackoverflow.com/questions/77871561/error-unknownaction-cannot-parse-action-at-api-auth-session */
  basePath: "/api/auth",
  debug: false,
};
