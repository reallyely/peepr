import {
  type RouteDefinition,
  type RouteSectionProps,
  createAsync,
} from "@solidjs/router";
import { Show, Suspense } from "solid-js";
import { Nav } from "~/components/nav";
import { getUser, logout } from "~/lib";

export const route = {
  preload() {
    getUser();
  },
} satisfies RouteDefinition;

export default function Home(props: RouteSectionProps) {
  const user = createAsync(() => getUser(), { deferStream: true });

  return (
    <>
      <Show when={user}>
        <Nav
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Integration Stats",
              href: "/integration",
            },
            {
              label: "Styles Test",
              href: "/sample-ui",
            },
          ]}
        />
      </Show>
      <div class="main-container">
        <Suspense>{props.children}</Suspense>
      </div>
    </>
  );
}
