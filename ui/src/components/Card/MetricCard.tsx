import { type Component, ErrorBoundary, type JSX, Show, Suspense, createEffect, createSignal } from "solid-js";
import Button from "../form/Button.tsx";
import { Card, CardContent, CardHeader } from "./Card.tsx";
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
  trend?: () => "up" | "down" | "neutral";
  /** Optional simple configuration to determine how the trend should be interpreted */
  goodQualifier?: "up" | "down" | "neutral";
  /** Optional function to determine if the trend is good, bad or neutral */
  trendQualifierFn?: (trend: "up" | "down" | "neutral") => "good" | "bad" | "neutral";
  /** The difference between the previous trend and the current trend */
  trendValue?: () => string | number;
}

/**
 * A card for displaying a metric with a title and value
 */
export const MetricCard: Component<MetricCardProps> = (props) => {
  const [qualifier, setQualifier] = createSignal<"good" | "bad" | "neutral">("neutral");
  createEffect(() => {
    if (props.trendQualifierFn) {
      return setQualifier(props.trendQualifierFn(props.trend()));
    }
    if (props.goodQualifier) return setQualifier(props.goodQualifier === props.trend() ? "good" : "bad");
  });
  return (
    <ErrorBoundary fallback={(error, reset) => <ErrorCard error={error} reset={reset} />}>
      <Card variant="subtle" class={`${props.class} `}>
        <CardHeader>{props.title}</CardHeader>
        <Suspense fallback={<div class={styles.valueContainer}>{props.value}</div>}>
          <CardContent class={styles.valueContainer}>
            <span class={styles.value}>{props.value}</span>
            <Show when={props.trend()} keyed>
              <div class={`${styles.trend} ${styles[`trend--${qualifier()}`]}`} aria-label={`Trend: ${props.trend()}`}>
                {props.trend() === "up" && "↑"}
                {props.trend() === "down" && "↓"}
                {props.trend() === "neutral" && "–"}
              </div>
            </Show>
          </CardContent>
        </Suspense>
      </Card>
    </ErrorBoundary>
  );
};

export default MetricCard;

const ErrorCard = (props: { error: Error; reset: () => void }) => (
  <Card variant="error">
    <CardHeader>We beefed it :(</CardHeader>
    <CardContent>
      <div>
        <Button size="sm" onClick={() => props.reset()}>
          Try again
        </Button>
      </div>
    </CardContent>
  </Card>
);
