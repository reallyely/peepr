import { type Accessor, type JSX, createMemo, untrack } from "solid-js";

/**
 * Conditionally render its children or an optional fallback component
 * @description https://www.solidjs.com/docs/latest/api#show
 */
export function Show<T>(props: {
  when: T | undefined | null | false;
  keyed: true;
  fallback?: JSX.Element;
  children: JSX.Element | ((item: NonNullable<T>) => JSX.Element);
}): JSX.Element;
export function Show<T>(props: {
  when: T | undefined | null | false;
  keyed?: false;
  fallback?: JSX.Element;
  children: JSX.Element | ((item: Accessor<NonNullable<T>>) => JSX.Element);
}): JSX.Element;
export function Show<T>(props: {
  when: T | undefined | null | false;
  keyed?: boolean;
  fallback?: JSX.Element;
  children:
  | JSX.Element
  | ((item: NonNullable<T> | Accessor<NonNullable<T>>) => JSX.Element);
}) {
  const keyed = props.keyed;
  const condition = createMemo<T | undefined | null | boolean>(
    () => props.when,
    undefined,
    { equals: (a, b) => (keyed ? a === b : !a === !b) },
  );
  return createMemo(() => {
    const c = condition();
    if (c) {
      const child = props.children;
      const fn = typeof child === "function" && child.length > 0;
      return fn
        ? untrack(() => (child as any)(keyed ? (c as T) : () => props.when))
        : child;
    }
    return props.fallback;
  });
}
