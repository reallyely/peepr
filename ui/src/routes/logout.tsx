import { useAction } from "@solidjs/router";
import { onMount, createSignal, Show } from "solid-js";
import { logout } from "~/lib";
import ProgressBar from "~/components/feedback/ProgressBar.js";

export default function Logout() {
  const logoutAction = useAction(logout);
  const [isLoggingOut, setIsLoggingOut] = createSignal(true);

  onMount(async () => {
    await logoutAction();
    setIsLoggingOut(false);
  });

  return (
    <Show fallback={<ProgressBar indeterminate />} when={isLoggingOut()}>
      <p>Logged out successfully</p>
    </Show>
  );
}
