import { Cycle, DateVO } from "@peepr/core";
import { type JSX, createEffect, createSignal, splitProps } from "solid-js";
import styles from "./CycleSelector.module.css";

interface CycleSelectorProps extends Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: number;
  onChange?: (cycleData: {
    cycleNumber: number;
    startDate: Date;
    endDate: Date;
  }) => void;
}

export const CycleSelector = (allProps: CycleSelectorProps) => {
  const [props, inputProps] = splitProps(allProps, ["value", "onChange"]);

  // Use the Cycle class to determine current cycle
  const currentCycle = Cycle.getDefaultCycleNumber();

  const [internalValue, setInternalValue] = createSignal(props.value || 1);
  const [cycleData, setCycleData] = createSignal({
    cycleNumber: 1,
    startDate: new Date(2025, 0, 1),
    endDate: new Date(2025, 0, 7),
  });

  const getCycleData = (cycleNumber: number) => {
    // Use the Cycle class to get date range
    const cycle = Cycle.fromCycleNumber(cycleNumber);
    return {
      cycleNumber,
      startDate: cycle.startDate,
      endDate: cycle.endDate,
    };
  };

  // Generate cycle ticks for display that match the selectable intervals
  const cycleTicks = [];
  for (let cycle = 1; cycle <= currentCycle; cycle++) {
    const cycleData = getCycleData(cycle);
    const percentage = ((cycle - 1) / (currentCycle - 1)) * 100;

    // Format the label - use month names for the first cycle of each month
    let label = "";
    if (cycle === 1 || cycleData.startDate.getDate() <= 7) {
      label = cycleData.startDate.toLocaleString("default", { month: "short" });
    }

    cycleTicks.push({
      cycle,
      label,
      position: percentage,
    });
  }

  const formatDate = (date: Date) => {
    return DateVO.create(date).format({
      month: "short",
      day: "numeric",
    });
  };

  createEffect(() => {
    // Update internal value when props.value changes
    if (props.value) {
      setInternalValue(props.value);
    }
  });

  createEffect(() => {
    const newData = getCycleData(internalValue());
    setCycleData(newData);

    if (props.onChange) {
      props.onChange(newData);
    }
  });

  const handleSliderChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setInternalValue(Number.parseInt(target.value, 10));
  };

  return (
    <div class={`${styles.cycleSelector}`}>
      <div class={styles.cycleInfoStatic}>
        <div class={styles.cycleNumber}>Cycle {cycleData().cycleNumber}</div>
        <div class={styles.dateRange}>
          {formatDate(cycleData().startDate)} - {formatDate(cycleData().endDate)}
        </div>
      </div>

      <input
        type="range"
        class={styles.slider}
        min="1"
        max={currentCycle}
        step="1"
        value={internalValue()}
        onInput={handleSliderChange}
        aria-valuemin={1}
        aria-valuemax={currentCycle}
        aria-valuenow={internalValue()}
        aria-valuetext={`Cycle ${cycleData().cycleNumber}: ${formatDate(cycleData().startDate)} to ${formatDate(cycleData().endDate)}`}
        {...inputProps}
      />

      {/* <div class={styles.ticks}>
        {cycleTicks.map((tick) => (
          // biome-ignore lint/correctness/useJsxKeyInIterable: does not apply to solid
          <div
            class={styles.tick}
            style={{
              left: `${ tick.position }% `,
            }}
            data-cycle={tick.cycle}
          >
            {tick.label && (
              <div class={styles.tickLabel}>
                <span class={styles.tickMonthLabel}>{tick.label}</span>
              </div>
            )}
          </div>
        ))}
      </div>
 */}
    </div>
  );
};
