import { type JSX, Show, splitProps } from "solid-js";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
	/**
	 * Current progress value (between 0 and max)
	 */
	value?: number;

	/**
	 * Maximum value (default: 100)
	 */
	max?: number;

	/**
	 * Visual variant of the progress bar
	 */
	variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";

	/**
	 * Size of the progress bar
	 */
	size?: "sm" | "md" | "lg";

	/**
	 * Optional label to display above the progress bar
	 */
	label?: string;

	/**
	 * Whether to show the numerical value
	 */
	showValue?: boolean;

	/**
	 * Format for percentage display (e.g. "50%" or "50/100")
	 */
	valueFormat?: "percentage" | "fraction" | "none";

	/**
	 * Whether the progress is indeterminate
	 */
	indeterminate?: boolean;

	/**
	 * Additional class names
	 */
	class?: string;

	/**
	 * Accessibility label
	 */
	"aria-label"?: string;
} & Omit<JSX.HTMLAttributes<HTMLProgressElement>, "value" | "max">;

export default function ProgressBar(props: ProgressBarProps) {
	const [local, others] = splitProps(props, [
		"value",
		"max",
		"variant",
		"size",
		"label",
		"showValue",
		"valueFormat",
		"indeterminate",
		"class",
		"aria-label",
	]);

	// Default values
	const max = () => local.max || 100;
	const variant = () => local.variant || "primary";
	const size = () => local.size || "md";
	const valueFormat = () => local.valueFormat || "percentage";
	const showValue = () => local.showValue !== false;

	// Calculate percentage for display
	const percentage = () => Math.round((local.value / max()) * 100);

	// Format the value display based on valueFormat
	const formattedValue = () => {
		if (valueFormat() === "percentage") {
			return `${percentage()}%`;
		}
		if (valueFormat() === "fraction") {
			return `${local.value}/${max()}`;
		}
		return "";
	};

	// Generate class names
	const progressClasses = () => {
		return [
			styles.progress,
			styles[`progress--${variant()}`],
			styles[`progress--${size()}`],
			local.indeterminate ? styles["progress--indeterminate"] : "",
			local.class || "",
		]
			.filter(Boolean)
			.join(" ");
	};

	return (
		<div class={styles["progress-container"]}>
			<Show when={local.label || showValue()}>
				<div class={styles["progress-labels"]}>
					<Show when={local.label}>
						<span class={styles["progress-text"]}>{local.label}</span>
					</Show>
					<Show when={showValue() && !local.indeterminate}>
						<span class={styles["progress-value"]}>{formattedValue()}</span>
					</Show>
				</div>
			</Show>

			<progress
				value={local.indeterminate ? 100 : local.value}
				max={max()}
				class={progressClasses()}
				aria-label={
					local["aria-label"] || local.label || `Progress: ${percentage()}%`
				}
				{...others}
			/>
		</div>
	);
}
