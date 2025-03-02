import { type JSX, splitProps } from "solid-js";
import styles from "./Alert.module.css";

type AlertProps = {
  type: "error" | "success" | "warning" | "info";
  children: JSX.Element;
  role?: string;
  id?: string;
  class?: string;
} & JSX.HTMLAttributes<HTMLDivElement>;

export default function Alert(props: AlertProps) {
  const [local, others] = splitProps(props, [
    "type",
    "children",
    "role",
    "id",
    "class",
  ]);

  const defaultRole = () => {
    return local.type === "error" ? "alert" : "status";
  };

  return (
    <div
      class={`${styles.alert} ${styles[`alert--${local.type}`]} ${local.class || ""}`}
      role={local.role || defaultRole()}
      id={local.id}
      {...others}
    >
      {local.children}
    </div>
  );
}
