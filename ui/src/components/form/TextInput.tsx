import { type JSX, splitProps } from "solid-js";
import styles from "./TextInput.module.css";

type TextInputProps = {
  id?: string;
  name: string;
  error?: string;
  class?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput(props: TextInputProps) {
  const [local, others] = splitProps(props, ["id", "name", "error", "class"]);

  return (
    <input
      id={local.id}
      name={local.name}
      classList={{
        [styles.input]: true,
        [styles["input--error"]]: !!local.error,
        [local.class || ""]: !!local.class
      }}
      aria-invalid={local.error ? "true" : "false"}
      aria-describedby={local.error ? `${local.id}-error` : undefined}
      {...others}
    />
  );
}
