import GitHub from "@auth/core/providers/github";
import type { SolidAuthConfig } from "@auth/solid-start";
import "../types/auth.ts";


/**
 * @link https://authjs.dev/getting-started/authentication/oauth
 */
export const authOpts: SolidAuthConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          scope: "repo read:user user:email read:org",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth tokens to the token right after signin
      if (!account) return token;
      if (!token.tokens) {
        token.tokens = {};
      }

      // Store GitHub tokens
      token.tokens.github = {
        accessToken: account.access_token,
        refreshToken: account.refresh_token,
        expiresAt: account.expires_at,
        scope: account.scope,
        tokenType: account.token_type || "Bearer",
      };
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      if (token.tokens) {
        session.tokens = token.tokens;
      }
      return session;
    },
  },
  /**  https://stackoverflow.com/questions/77871561/error-unknownaction-cannot-parse-action-at-api-auth-session */
  basePath: "/api/auth",
  debug: process.env.DEBUG === "true",
};
