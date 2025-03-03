import { Popover as KobaltePopover } from "@kobalte/core/popover";
import { type JSX, Show, createSignal, splitProps } from "solid-js";
import styles from "./Popover.module.css";

export interface PopoverProps {
  /** The controlled open state of the popover */
  open?: boolean;
  /** The default open state when initially rendered */
  defaultOpen?: boolean;
  /** Event handler called when the open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Whether the popover is modal */
  modal?: boolean;
  /** Whether scroll should be locked when not modal */
  preventScroll?: boolean;
  /** Whether to force mounting the popover when more control is needed */
  forceMount?: boolean;
  /** The placement of the popover */
  placement?:
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-start"
  | "top-end"
  | "right-start"
  | "right-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end";
  /** Trigger element */
  trigger: JSX.Element;
  /** The content of the popover */
  children: JSX.Element;
  /** Optional CSS class for the popover container */
  class?: string;
  /** The distance between the popover and the anchor element */
  gutter?: number;
  /** Whether to show an arrow pointing to the anchor */
  showArrow?: boolean;
  /** Size of the arrow in pixels */
  arrowSize?: number;
  /** Whether the popover should close when clicking outside */
  closeOnClickOutside?: boolean;
  /** Whether the popover should close when the escape key is pressed */
  closeOnEscape?: boolean;
}

export function Popover(props: PopoverProps) {
  const [local, others] = splitProps(props, [
    "open",
    "defaultOpen",
    "onOpenChange",
    "modal",
    "preventScroll",
    "forceMount",
    "placement",
    "trigger",
    "children",
    "class",
    "gutter",
    "showArrow",
    "arrowSize",
    "closeOnClickOutside",
    "closeOnEscape",
  ]);

  const [internalOpen, setInternalOpen] = createSignal(
    local.defaultOpen || false,
  );

  const isOpen = () => (local.open !== undefined ? local.open : internalOpen());

  const handleOpenChange = (open: boolean) => {
    if (local.open === undefined) {
      setInternalOpen(open);
    }
    local.onOpenChange?.(open);
  };

  const handleInteractOutside = (event: any) => {
    if (local.closeOnClickOutside && event.target) {
      event.preventDefault();
    }
  };

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (local.closeOnEscape) {
      event.preventDefault();
    }
  };

  return (
    <KobaltePopover
      open={local.open}
      defaultOpen={local.defaultOpen}
      onOpenChange={handleOpenChange}
      modal={local.modal}
      preventScroll={local.preventScroll}
      forceMount={local.forceMount}
      placement={local.placement || "bottom"}
      gutter={local.gutter || 8}
      {...others}
    >
      <KobaltePopover.Trigger class={styles["popover__trigger"]}>
        {local.trigger}
      </KobaltePopover.Trigger>

      <KobaltePopover.Portal>
        <KobaltePopover.Content
          class={`${styles["popover__content"]} ${local.class || ""}`}
          onInteractOutside={handleInteractOutside}
          onEscapeKeyDown={handleEscapeKeyDown}
        >
          {local.showArrow && (
            <KobaltePopover.Arrow
              class={styles["popover__arrow"]}
              size={local.arrowSize || 8}
            />
          )}

          <div class={styles["popover__body"]}>{local.children}</div>
        </KobaltePopover.Content>
      </KobaltePopover.Portal>
    </KobaltePopover>
  );
}

// Subcomponents for more complex use cases
Popover.Title = KobaltePopover.Title;
Popover.Description = KobaltePopover.Description;
Popover.CloseButton = (
  props: JSX.IntrinsicElements["button"] & { children?: JSX.Element },
) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return (
    <KobaltePopover.CloseButton
      class={`${styles["popover__close-button"]} ${local.class || ""}`}
      {...others}
    >
      {local.children || <span aria-hidden="true">×</span>}
    </KobaltePopover.CloseButton>
  );
};
