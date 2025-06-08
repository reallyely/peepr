import { ComponentProps, JSX, ValidComponent } from "solid-js";

/**
 * A valid component that can be used with the `as` prop
 */
export type ValidComponentType = ValidComponent;

/**
 * Extract the element type from a component type
 */
export type ElementOf<T extends ValidComponent> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends JSX.HTMLAttributes<infer E>
    ? E
    : HTMLElement
  : HTMLElement;

/**
 * Props for polymorphic components
 */
export interface PolymorphicProps<T extends ValidComponent, P = {}> {
  /**
   * The component or element to render as
   */
  as?: T | ((props: any) => JSX.Element);
}

/**
 * Merge polymorphic props with component props
 */
export type MergePolymorphicProps<
  T extends ValidComponent,
  P = {}
> = P & PolymorphicProps<T> & ComponentProps<T>;

/**
 * Callback props for the `as` prop when using a function
 */
export type PolymorphicCallbackProps<
  ComponentProps,
  Options,
  RenderProps
> = Omit<ComponentProps, keyof Options> & RenderProps;

/**
 * Override component props for simpler typing when element type is fixed
 */
export type OverrideComponentProps<
  T extends keyof JSX.IntrinsicElements,
  P = {}
> = P & JSX.IntrinsicElements[T];

/**
 * Dynamic component that can render as different elements
 */
export interface DynamicProps<T extends ValidComponent = "div"> {
  component?: T;
  [key: string]: any;
}

/**
 * Create a polymorphic component
 */
export function createPolymorphic<T extends ValidComponent = "div">(
  defaultComponent: T
) {
  return function PolymorphicComponent(
    props: MergePolymorphicProps<T, any>
  ): JSX.Element {
    const Component = (props.as || defaultComponent) as any;
    
    if (typeof Component === "function" && Component.length > 0) {
      // Component is a callback function
      return Component(props);
    }
    
    return <Component {...props} />;
  };
}

/**
 * Split polymorphic props from component props
 */
export function splitPolymorphicProps<T extends ValidComponent, P extends Record<string, any>>(
  props: MergePolymorphicProps<T, P>,
  localKeys: (keyof P)[]
) {
  const { as, ...others } = props;
  const local: Partial<P> = {};
  const polymorphic: PolymorphicProps<T> = { as };
  const rest: Record<string, any> = {};
  
  for (const key in others) {
    if (localKeys.includes(key as keyof P)) {
      (local as any)[key] = others[key];
    } else {
      rest[key] = others[key];
    }
  }
  
  return [local as P, polymorphic, rest] as const;
}