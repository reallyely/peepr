// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/nav/nav";

import "~/components/core/app.css";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />
      <Router
        root={(props) => (
          <>
            <Nav items={[
              {
                label: "Home",
                href: "/",
              },
              {
                label: "GitHub",
                items: [
                  {
                    label: "Pull Requests",
                    href: "/pull-requests",
                  }
                ]
              },
              {
                label: "Styles Test",
                href: "/sample-ui",
              }
            ]
            } />
            <Suspense>{props.children}</Suspense>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}
