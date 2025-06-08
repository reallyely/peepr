// This nascent file will likely be moved into its own package
// where such things as this will be better encoded

export type ProviderName = 'github';

export interface ProviderToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  scope?: string;
  tokenType?: string;
}

export type ProviderTokens = Record<ProviderName, ProviderToken>

declare module "@auth/core/types" {
  interface Session {
    tokens?: ProviderTokens;
  }

  interface JWT {
    tokens?: ProviderTokens;
  }
}

/**
 * Why we need tokens in both JWT and Session:
 *
 * JWT tokens:
 * - Server-side persistence of tokens between requests
 * - Used for token refresh logic in JWT callbacks
 * - Secure storage of sensitive refresh tokens
 * - Required for server-side API calls to external providers
 *
 * Session tokens:
 * - Client-side access to tokens for frontend API calls
 * - Exposed to the browser through session object
 * - Used by React components to make authenticated requests
 * - Flows from JWT -> Session via the jwt() callback
 */

// Utility functions for working with provider tokens
export const getProviderToken = (session: { tokens?: ProviderTokens }, provider: ProviderName): ProviderToken | undefined => {
  return session.tokens?.[provider];
};

export const hasProviderToken = (session: { tokens?: ProviderTokens }, provider: ProviderName): boolean => {
  return !!session.tokens?.[provider]?.accessToken;
};

export const isTokenExpired = (token: ProviderToken): boolean => {
  if (!token.expiresAt) return false;
  return Date.now() >= token.expiresAt * 1000;
};
