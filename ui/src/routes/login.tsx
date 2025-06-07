import { Card, CardContent } from "~/components/card";

import styles from "./login.module.css";

import { signIn } from "@auth/solid-start/client";
import Button from "~/components/form/Button";

export default function Login() {

  return (
    <main class="main-container">
      <div class={styles.login}>
        <Card style={{ display: "flex", "align-items": "center", "justify-content": "center" }}>
          <Button onClick={() => signIn("github", { redirectTo: "/" })}>Sign in with GitHub</Button>
        </Card>
      </div>
    </main>
  );
}
