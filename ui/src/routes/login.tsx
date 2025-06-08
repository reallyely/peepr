import { Card } from "~/components/Card";

import styles from "./login.module.css";

import { signIn } from "@auth/solid-start/client";
import Button from "~/components/form/Button";

export default function Login() {

  return (
    <main class="main-container flex flex-col justify-center items-center w-full h-full">
      <div class={styles.login}>
        <h1>Peepr 👀</h1>
        <Card class="flex flex-col justify-center items-center">
          <Button size="lg" variant="cta" onClick={() => signIn("github", { redirectTo: "/" })}>Sign in with GitHub</Button>
        </Card>
      </div>
    </main>
  );
}
