
import { getSession } from "@auth/solid-start";
import { createAsync, query, redirect } from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { getWebRequest } from "vinxi/http";
import { ProgressBar } from "~/components/feedback";
import { authOpts } from "~/config/auth";

const querySession = query(async () => {
  "use server"
  const request = getWebRequest()
  const session = await getSession(request, authOpts)

  console.log({ session })
  if (!session?.user) throw redirect("/login")
  return session;
}, "get-session");

export const ProtectedRoute = props => {
  const session = createAsync(querySession)
  return (
    <Suspense fallback={<ProgressBar indeterminate />}>
      <Show when={session()?.user}>
        {props.children}
      </Show>
    </Suspense>
  )
}
