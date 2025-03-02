import { Skeleton as KobalteSkeleton } from "@kobalte/core/skeleton";
import { type JSX, splitProps } from "solid-js";
import styles from "./Skeleton.module.css";

type SkeletonPreset = 
  | "text" 
  | "title" 
  | "avatar" 
  | "avatar-sm" 
  | "avatar-lg" 
  | "button" 
  | "card" 
  | "image";

type SkeletonProps = {
  /** Predefined sizing and shape presets */
  preset?: SkeletonPreset;
  /** Whether the skeleton should be visible */
  visible?: boolean;
  /** Whether the skeleton should animate */
  animate?: boolean;
  /** The width of the skeleton in px or CSS value (e.g. "100%", "50px") */
  width?: number | string;
  /** The height of the skeleton in px or CSS value (e.g. "100%", "50px") */
  height?: number | string;
  /** Roundness of the skeleton in px */
  radius?: number;
  /** Whether the skeleton should be a circle */
  circle?: boolean;
  /** Additional classes to apply */
  class?: string;
  /** Children to render when not in loading state */
  children?: JSX.Element;
} & JSX.HTMLAttributes<HTMLDivElement>;

export default function Skeleton(props: SkeletonProps) {
  const [local, others] = splitProps(props, [
    "preset",
    "visible",
    "animate",
    "width",
    "height",
    "radius",
    "circle",
    "class",
    "children",
  ]);

  // Set default values
  const isVisible = () => local.visible !== false; // Default to true
  const shouldAnimate = () => local.animate !== false; // Default to true
  
  const getClassName = () => {
    return [
      styles.skeleton,
      local.preset ? styles[`skeleton--${local.preset}`] : "",
      local.circle ? styles["skeleton--circle"] : "",
      shouldAnimate() ? styles["skeleton--animate"] : "",
      local.class || "",
    ]
      .filter(Boolean)
      .join(" ");
  };

  // Determine custom inline styles if provided
  const getCustomStyles = () => {
    const customStyles: Record<string, string> = {};
    
    if (local.width !== undefined && !local.preset) {
      customStyles.width = typeof local.width === "number" ? `${local.width}px` : local.width;
    }
    
    if (local.height !== undefined && !local.preset) {
      customStyles.height = typeof local.height === "number" ? `${local.height}px` : local.height;
    }
    
    if (local.radius !== undefined && !local.circle && !local.preset) {
      customStyles.borderRadius = `${local.radius}px`;
    }
    
    return customStyles;
  };

  return (
    <KobalteSkeleton
      visible={isVisible()}
      animate={shouldAnimate()}
      class={getClassName()}
      style={getCustomStyles()}
      {...others}
    >
      {local.children}
    </KobalteSkeleton>
  );
}