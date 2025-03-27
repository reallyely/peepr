import { type JSX, splitProps } from "solid-js";
import { Popover } from "./Popover";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  /** The tooltip content */
  content: JSX.Element;
  /** The element that triggers the tooltip */
  children: JSX.Element;
  /** The placement of the tooltip */
  placement?: "top" | "right" | "bottom" | "left";
  /** Delay before showing the tooltip (in ms) */
  delay?: number;
  /** Whether to show an arrow */
  showArrow?: boolean;
  /** Additional CSS class for the tooltip */
  class?: string;
}

export function Tooltip(props: TooltipProps) {
  const [local, others] = splitProps(props, [
    "content",
    "children",
    "placement",
    "delay",
    "showArrow",
    "class",
  ]);

  return (
    <Popover
      trigger={local.children}
      placement={local.placement || "top"}
      gutter={8}
      showArrow={local.showArrow !== false}
      arrowSize={6}
      class={`${styles.tooltip} ${local.class || ""}`}
      closeOnClickOutside={true}
      closeOnEscape={true}
      {...others}
    >
      <div class={styles.tooltip__content}>{local.content}</div>
    </Popover>
  );
}
