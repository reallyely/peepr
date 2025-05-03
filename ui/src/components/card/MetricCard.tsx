import { type Component, type JSX, Show } from "solid-js";
import { Card, CardContent } from "./card";
import styles from "./metric-card.module.css";

export interface MetricCardProps {
  /** The title of the metric card */
  title: string;
  /** The value to display prominently */
  value: JSX.Element;
  /** Optional description to show in a tooltip */
  description?: string;
  /** Additional classes to apply to the card */
  class?: string;
  /** Optional trend indicator */
  trend?: "up" | "down" | "neutral";
}

/**
 * A card for displaying a metric with a title and value
 */
export const MetricCard: Component<MetricCardProps> = (props) => {
  return (
    <Card variant="subtle" class={props.class}>
      <CardContent>
        <span class={styles.title}>{props.title}</span>
        <div class={styles.valueContainer}>
          <span class={styles.value}>{props.value}</span>
          <Show when={props.trend}>
            <span 
              class={`${styles.trend} ${styles[`trend--${props.trend}`]}`} 
              aria-label={`Trend: ${props.trend}`}
            >
              {props.trend === "up" && "↑"}
              {props.trend === "down" && "↓"}
              {props.trend === "neutral" && "–"}
            </span>
          </Show>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
