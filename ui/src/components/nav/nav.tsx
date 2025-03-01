import { NavigationMenu } from "@kobalte/core/navigation-menu";
import { type Component, For } from "solid-js";
import styles from "./nav.module.css";

type NavItem = {
  label: string;
  href?: string;
  items?: NavItem[];
};

type NavProps = {
  items: NavItem[];
  logo?: string;
};

export const Nav: Component<NavProps> = (props) => {
  return (
    <div class={styles.nav}>
      <NavigationMenu class={styles.nav__menu}>
        {props.logo && (
          <div class={styles.nav__logo}>
            <img src={props.logo} alt="Logo" class={styles.nav__logo_image} />
          </div>
        )}

        <For each={props.items}>
          {(item) => (
            <>
              {item.items ? (
                <NavigationMenu.Menu>
                  <NavigationMenu.Trigger class={styles.nav__item}>
                    {item.label}
                    <NavigationMenu.Icon class={styles.nav__icon} />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Portal>
                    <NavigationMenu.Content class={styles.nav__content}>
                      <For each={item.items}>
                        {(subItem) => (
                          <NavigationMenu.Item
                            class={styles.nav__sub_item}
                            as="a"
                            href={subItem.href}
                          >
                            <NavigationMenu.ItemLabel>
                              {subItem.label}
                            </NavigationMenu.ItemLabel>
                          </NavigationMenu.Item>
                        )}
                      </For>
                    </NavigationMenu.Content>
                  </NavigationMenu.Portal>
                </NavigationMenu.Menu>
              ) : (
                <NavigationMenu.Trigger
                  as="a"
                  href={item.href}
                  class={styles.nav__item}
                >
                  {item.label}
                </NavigationMenu.Trigger>
              )}
            </>
          )}
        </For>

        <NavigationMenu.Viewport class={styles.nav__viewport} />
      </NavigationMenu>
    </div>
  );
};

export default Nav;
