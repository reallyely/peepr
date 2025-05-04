import { type JSX, splitProps } from "solid-js";
import styles from "./card.module.css";

interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
  variant?: "default" | "highlight" | "subtle" | "error";
}

export function Card(props: CardProps) {
  const [local, others] = splitProps(props, ["children", "class", "variant"]);

  const getVariantClass = () => {
    if (local.variant === "highlight") return styles["card--highlight"];
    if (local.variant === "subtle") return styles["card--subtle"];
    if (local.variant === "error") return styles["card--error"];
    return "";
  };

  return (
    <article class={`${styles.card} ${getVariantClass()} ${local.class || ""}`} {...others}>
      {local.children}
    </article>
  );
}

interface CardHeaderProps {
  children?: JSX.Element;
  count?: number;
  class?: string;
}

export function CardHeader(props: CardHeaderProps) {
  const [local, others] = splitProps(props, ["children", "count", "class"]);

  return (
    <div class={`${styles.card__header} ${local.class || ""}`} {...others}>
      <div class={styles.card__title}>{local.children}</div>
      {local.count !== undefined && <div class={styles.card__count}>{local.count}</div>}
    </div>
  );
}

export function CardContent(props: { children: JSX.Element; class?: string }) {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <div class={`${styles.card__content} ${local.class || ""}`} {...others}>
      {local.children}
    </div>
  );
}

export function CardItem(props: { children: JSX.Element; class?: string }) {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <div class={`${styles.card__item} ${local.class || ""}`} {...others}>
      {local.children}
    </div>
  );
}
