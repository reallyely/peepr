import { SolidAuth } from "@auth/solid-start";
import { authOpts } from "~/config/auth";

/**
 * Because of how this route is named, all calls that are otherwise unspecified and match api/auth/* will be routed here
 * This Handler inspects requests and handles the OAuth flow for us such as signin, sinout, callback, etc.
 * @link https://docs.solidjs.com/solid-start/building-your-application/routing#file-based-routing
 */
export const { GET, POST } = SolidAuth(
  authOpts
);
