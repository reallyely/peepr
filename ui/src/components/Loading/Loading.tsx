import { type JSX, splitProps, Show } from "solid-js";
import "../core/transitions.css";

export interface LoadingProps {
  /** Whether to show the loading state */
  active?: boolean;
  /** Loading variant - affects the visual style */
  variant?: "glow" | "spinner" | "dots" | "minimal";
  /** Size of the loading effect */
  size?: "sm" | "md" | "lg";
  /** Custom class for styling */
  class?: string;
}

export function Loading(props: LoadingProps) {
  const [local, others] = splitProps(props, [
    "active",
    "variant",
    "size",
    "class"
  ]);

  const variant = () => local.variant || "glow";
  const size = () => local.size || "md";

  console.log(local.active)
  return (
    <div
      classList={{
        "loading": true,
        "loading--active": local.active,
        [`loading--${variant()}`]: true,
        [`loading--${size()}`]: size() !== "md",
        [local.class]: !!local.class,
      }}
      {...others}
    >
      <Show when={variant() === "spinner"}>
        <div class="loading-spinner" />
      </Show>
      <Show when={variant() === "dots"}>
        <div class="loading-dots">
          <div />
          <div />
          <div />
        </div>
      </Show>
    </div>
  );
}
