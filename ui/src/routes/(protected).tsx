import type { RouteSectionProps } from "@solidjs/router";
import { Nav } from "~/components/nav";
import { ProtectedRoute } from "~/layout/ProtectedRoute";

export default function Home(props: RouteSectionProps) {
  return (
    <ProtectedRoute>
      <Nav
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Repositories",
            href: "/repositories",
          },
          {
            label: "Logout",
            href: "/logout",
          },
        ]}
      />
      <div class="main-container">{props.children}</div>
    </ProtectedRoute>
  );
}
