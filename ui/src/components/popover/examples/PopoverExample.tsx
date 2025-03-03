import { Popover, PopoverMenu, Tooltip } from "../index";
import styles from "./PopoverExample.module.css";

export function PopoverExample() {
  const menuItems = [
    { id: 'edit', label: 'Edit', icon: <span>✏️</span>, onClick: (id) => console.log(id) },
    { id: 'duplicate', label: 'Duplicate', icon: <span>🔄</span>, onClick: (id) => console.log(id) },
    { id: 'archive', label: 'Archive', icon: <span>📦</span>, onClick: (id) => console.log(id) },
    { id: 'delete', label: 'Delete', icon: <span>🗑️</span>, danger: true, onClick: (id) => console.log(id) }
  ];

  return (
    <div class={styles.examples}>
      <h2>Popover Examples</h2>
      
      <div class={styles.example}>
        <h3>Basic Popover</h3>
        <Popover 
          trigger={<button class={styles.button}>Click me</button>}
          showArrow
        >
          <div class={styles.popoverContent}>
            <h4>Popover Title</h4>
            <p>This is a basic popover with some content.</p>
          </div>
        </Popover>
      </div>

      <div class={styles.example}>
        <h3>Tooltip</h3>
        <Tooltip
          content="This is a simple tooltip that appears on hover"
          placement="top"
          showArrow
        >
          <button class={styles.button}>Hover me</button>
        </Tooltip>
      </div>

      <div class={styles.example}>
        <h3>Menu Popover</h3>
        <PopoverMenu
          trigger={<button class={styles.button}>Open Menu</button>}
          items={menuItems}
          placement="bottom-start"
          title="Actions"
          showArrow
        />
      </div>

      <div class={styles.example}>
        <h3>Modal Popover</h3>
        <Popover 
          trigger={<button class={styles.button}>Open Modal</button>}
          modal={true}
          showArrow
        >
          <div class={styles.popoverContent}>
            <Popover.CloseButton />
            <h4>Modal Popover</h4>
            <p>This is a modal popover that traps focus and prevents interaction with the background.</p>
            <button class={styles.button}>Focusable Button</button>
          </div>
        </Popover>
      </div>
    </div>
  );
}PopoverMenuTooltip