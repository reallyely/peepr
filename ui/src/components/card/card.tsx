import { type JSX, splitProps } from "solid-js";
import styles from "./card.module.css";

interface CardProps {
  children: JSX.Element;
  class?: string;
}

export function Card(props: CardProps) {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <article class={`${styles.card} ${local.class || ""}`} {...others}>
      {local.children}
    </article>
  );
}

interface CardHeaderProps {
  title: JSX.Element;
  count?: number;
  class?: string;
}

export function CardHeader(props: CardHeaderProps) {
  const [local, others] = splitProps(props, ["title", "count", "class"]);

  return (
    <div class={`${styles.card__header} ${local.class || ""}`} {...others}>
      <div class={styles.card__title}>{local.title}</div>
      {local.count !== undefined && (
        <div class={styles.card__count}>{local.count}</div>
      )}
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
