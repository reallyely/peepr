
import { type RouteDefinition, type RouteSectionProps, createAsync, query, redirect } from "@solidjs/router";
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
            label: "Integration Stats",
            href: "/integration",
          },
          {
            label: "Styles Test",
            href: "/sample-ui",
          },
          {
            label: "Logout",
            href: "/logout",
          },
        ]}
      />
      <div class="main-container">
        {props.children}
      </div>
    </ProtectedRoute>
  );
}
