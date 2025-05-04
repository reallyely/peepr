import { type JSX, splitProps } from "solid-js";
import styles from "./FormField.module.css";

type FormFieldProps = {
  label: string;
  error?: string;
  required?: boolean;
  id: string;
  class?: string;
  children: JSX.Element;
};

export default function FormField(props: FormFieldProps) {
  const [local, others] = splitProps(props, ["label", "error", "required", "id", "class", "children"]);

  return (
    <div class={`${styles.field} ${local.class || ""}`} {...others}>
      <label for={local.id} class={styles.field__label}>
        {local.label}
        {local.required && <span class={styles["field__required-indicator"]}>*</span>}
      </label>

      {local.children}

      {local.error && (
        <div class={styles.field__error} id={`${local.id}-error`}>
          {local.error}
        </div>
      )}
    </div>
  );
}
