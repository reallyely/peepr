import {
  type RouteSectionProps,
  useSubmission
} from "@solidjs/router";
import { Show } from "solid-js";
import { Card } from "~/components/card";
import Alert from "~/components/feedback/Alert";
import Button from "~/components/form/Button";
import FormField from "~/components/form/FormField";
import RadioGroup from "~/components/form/RadioGroup";
import TextInput from "~/components/form/TextInput";
import { loginOrRegister } from "~/lib";
import styles from "./login.module.css";

export default function Login(props: RouteSectionProps) {
  const loggingIn = useSubmission(loginOrRegister);

  return (
    <main class="main-container">
      <div class={styles.login}>
        <Card>
          <form
            action={loginOrRegister}
            method="post"
            class={styles.login__form}
            aria-describedby={loggingIn.result?.message ? "error-message" : undefined}
          >
            <input type="hidden" name="redirectTo" value={props.params.redirectTo ?? "/"} />

            <RadioGroup
              name="loginType"
              legend="Login or Register?"
              defaultValue="login"
              options={[
                { value: "login", label: "Login" },
                // { value: "register", label: "Register" }
              ]}
            />

            <FormField
              label="Username"
              id="username-input"
              required
            >
              <TextInput
                id="username-input"
                name="username"
                autocomplete="username"
                required
              />
            </FormField>

            <FormField
              label="Password"
              id="password-input"
              required
            >
              <TextInput
                id="password-input"
                name="password"
                type="password"
                autocomplete="current-password"
                required
              />
            </FormField>

            <Button
              type="submit"
              fullWidth
              loading={loggingIn.pending}
            >
              {loggingIn.pending ? "Processing..." : "Login"}
            </Button>

            <Show when={loggingIn.result?.message}>
              <Alert
                type="error"
                id="error-message"
              >
                {loggingIn.result?.message}
              </Alert>
            </Show>
          </form>
        </Card>
      </div>
    </main>
  );
}
