import { For, type JSX, splitProps } from "solid-js";
import styles from "./RadioGroup.module.css";

type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  legend: string;
  defaultValue?: string;
  class?: string;
} & JSX.FieldsetHTMLAttributes<HTMLFieldSetElement>;

export default function RadioGroup(props: RadioGroupProps) {
  const [local, others] = splitProps(props, ["name", "options", "legend", "defaultValue", "class"]);

  return (
    <fieldset class={`${styles.fieldset} ${local.class || ""}`} {...others}>
      <legend class={styles.fieldset__legend}>{local.legend}</legend>
      <div class={styles.fieldset__options}>
        <For each={local.options}>
          {(option) => (
            <label class={styles.fieldset__option}>
              <input
                type="radio"
                name={local.name}
                value={option.value}
                checked={option.value === local.defaultValue}
                class={styles.fieldset__radio}
              />
              <span class={styles.fieldset__label}>{option.label}</span>
            </label>
          )}
        </For>
      </div>
    </fieldset>
  );
}
