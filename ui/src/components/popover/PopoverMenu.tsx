import { type JSX, createSignal, splitProps } from "solid-js";
import { Popover } from "./Popover";
import styles from "./PopoverMenu.module.css";

export interface PopoverMenuItem {
  /** Unique identifier for the item */
  id: string;
  /** Label to display */
  label: string | JSX.Element;
  /** Optional icon to display before the label */
  icon?: JSX.Element;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Action to perform when the item is clicked */
  onClick?: (id: string) => void;
  /** Whether this is a danger action (styled differently) */
  danger?: boolean;
  /** CSS class name */
  class?: string;
}

export interface PopoverMenuProps {
  /** Menu trigger element */
  trigger: JSX.Element;
  /** Array of menu items */
  items: PopoverMenuItem[];
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
  /** Additional CSS class */
  class?: string;
  /** Whether to show an arrow */
  showArrow?: boolean;
  /** Optional title for the popover */
  title?: string;
}

export function PopoverMenu(props: PopoverMenuProps) {
  const [local, others] = splitProps(props, [
    "trigger",
    "items",
    "placement",
    "class",
    "showArrow",
    "title",
  ]);

  const [isOpen, setIsOpen] = createSignal(false);

  const handleItemClick = (item: PopoverMenuItem) => {
    if (!item.disabled && item.onClick) {
      item.onClick(item.id);
      setIsOpen(false);
    }
  };

  return (
    <Popover
      trigger={local.trigger}
      placement={local.placement || "bottom-start"}
      open={isOpen()}
      onOpenChange={setIsOpen}
      class={`${styles["popover-menu"]} ${local.class || ""}`}
      showArrow={local.showArrow}
      closeOnClickOutside={true}
      closeOnEscape={true}
      {...others}
    >
      <div class={styles["popover-menu__container"]}>
        {local.title && (
          <div class={styles["popover-menu__title"]}>{local.title}</div>
        )}
        <ul class={styles["popover-menu__list"]}>
          {local.items.map((item) => (
            <li
              class={`${styles["popover-menu__item"]} ${item.disabled ? styles["popover-menu__item--disabled"] : ""
                } ${item.danger ? styles["popover-menu__item--danger"] : ""
                } ${item.class || ""}`}
              onClick={() => handleItemClick(item)}
              tabIndex={item.disabled ? -1 : 0}
              role="menuitem"
              aria-disabled={item.disabled}
            >
              {item.icon && (
                <span class={styles["popover-menu__item-icon"]}>
                  {item.icon}
                </span>
              )}
              <span class={styles["popover-menu__item-label"]}>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Popover>
  );
}
