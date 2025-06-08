import { Badge as KobalteBadge } from "@kobalte/core/badge";
import { type JSX, Show, splitProps } from "solid-js";
import styles from "./Badge.module.css";

export interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the badge */
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "neutral";
  
  /** Style variant */
  style?: "solid" | "outline" | "soft";
  
  /** Size of the badge */
  size?: "sm" | "md" | "lg";
  
  /** Whether the badge is clickable */
  clickable?: boolean;
  
  /** Whether to show a dot indicator */
  dot?: boolean;
  
  /** Whether the dot should pulse (for status indicators) */
  pulse?: boolean;
  
  /** Icon to display before the text */
  icon?: JSX.Element;
  
  /** Whether the badge can be dismissed */
  dismissible?: boolean;
  
  /** Callback when badge is dismissed */
  onDismiss?: () => void;
  
  /** Accessible text description if children is not text */
  textValue?: string;
  
  /** Additional CSS classes */
  class?: string;
  
  /** Badge content */
  children: JSX.Element;
}

/**
 * A Badge component for displaying small pieces of information or status indicators.
 */
export const Badge = (props: BadgeProps) => {
  const [local, others] = splitProps(props, [
    "variant",
    "style", 
    "size",
    "clickable",
    "dot",
    "pulse",
    "icon",
    "dismissible",
    "onDismiss",
    "textValue",
    "class",
    "children"
  ]);

  // Default values
  const variant = () => local.variant || "neutral";
  const styleVariant = () => local.style || "solid";
  const size = () => local.size || "md";

  // Generate class names
  const badgeClasses = () => {
    return [
      styles.badge,
      styles[`badge--${variant()}`],
      styles[`badge--${styleVariant()}`],
      styles[`badge--${size()}`],
      local.clickable ? styles["badge--clickable"] : "",
      local.pulse ? styles["badge--pulse"] : "",
      local.class || "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (local.clickable && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      (e.currentTarget as HTMLElement).click();
    }
  };

  const handleDismiss = (e: Event) => {
    e.stopPropagation();
    local.onDismiss?.();
  };

  const handleDismissKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      local.onDismiss?.();
    }
  };

  return (
    <KobalteBadge
      class={badgeClasses()}
      textValue={local.textValue}
      tabIndex={local.clickable ? 0 : undefined}
      onKeyDown={local.clickable ? handleKeyDown : undefined}
      role={local.clickable ? "button" : "status"}
      {...others}
    >
      <Show when={local.dot}>
        <span class={styles.badge__dot} aria-hidden="true" />
      </Show>
      
      <Show when={local.icon}>
        <span class={styles.badge__icon} aria-hidden="true">
          {local.icon}
        </span>
      </Show>
      
      {local.children}
      
      <Show when={local.dismissible}>
        <button
          type="button"
          class={styles.badge__close}
          onClick={handleDismiss}
          onKeyDown={handleDismissKeyDown}
          aria-label="Remove badge"
        >
          ×
        </button>
      </Show>
    </KobalteBadge>
  );
};

export default Badge;