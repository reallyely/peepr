import { NavigationMenu } from "@kobalte/core/navigation-menu";
import { type Component, For } from "solid-js";
import styles from "./nav.module.css";

export type NavItem = {
  label: string;
  href?: string;
  items?: NavItem[];
};

export type NavProps = {
  items: NavItem[];
  logo?: string;
};

export const Nav: Component<NavProps> = (props) => {
  return (
    <NavigationMenu>
      <div class={styles.nav__menu}>
        <For each={props.items}>
          {(item) => (
            <>
              {item.items ? (
                <NavigationMenu.Menu>
                  <NavigationMenu.Trigger class={styles.nav__item}>{item.label}</NavigationMenu.Trigger>
                  <NavigationMenu.Portal>
                    <NavigationMenu.Content class={styles.nav__content}>
                      <For each={item.items}>
                        {(subItem) => (
                          <NavigationMenu.Item class={styles.nav__sub_item} as="a" href={subItem.href}>
                            <NavigationMenu.ItemLabel>{subItem.label}</NavigationMenu.ItemLabel>
                          </NavigationMenu.Item>
                        )}
                      </For>
                    </NavigationMenu.Content>
                  </NavigationMenu.Portal>
                </NavigationMenu.Menu>
              ) : (
                <NavigationMenu.Trigger as="a" href={item.href} class={styles.nav__item}>
                  {item.label}
                </NavigationMenu.Trigger>
              )}
            </>
          )}
        </For>
      </div>

      {/* Place the Viewport outside the nav container to avoid overflow issues */}
      <NavigationMenu.Viewport class={styles.nav__viewport} classList={{ [styles["nav__viewport--expanded"]]: true }} />
    </NavigationMenu>
  );
};

export default Nav;
