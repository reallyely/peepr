import { type JSX, splitProps } from "solid-js";
import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "cta" | "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  children: JSX.Element;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["variant", "size", "fullWidth", "type", "loading", "children", "class"]);

  const variant = local.variant || "primary";
  const size = local.size || "md";
  const type = local.type || "button";

  const buttonClass = () => {
    return [
      styles.button,
      styles[`button--${variant}`],
      styles[`button--${size}`],
      local.fullWidth ? styles["button--full-width"] : "",
      local.class || "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const hasEnhancedEffects = () => variant === "cta" || variant === "danger";

  return (
    <button type={type} disabled={local.loading || props.disabled} class={buttonClass()} {...others}>
      {hasEnhancedEffects() && (
        <>
          <span class={styles.button__noise} aria-hidden="true" />
          <span class={styles.button__shadow} aria-hidden="true" />
        </>
      )}
      {local.loading ? (
        <span class={styles["button__loading-text"]}>
          <span class={styles.button__spinner} aria-hidden="true" />
          {local.children}
        </span>
      ) : (
        local.children
      )}
    </button>
  );
}
