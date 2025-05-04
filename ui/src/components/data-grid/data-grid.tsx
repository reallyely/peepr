import {
  type ColumnDef,
  type SortingState,
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";
import { For, createMemo, createSignal } from "solid-js";
import styles from "./data-grid.module.css";

export interface DataGridProps<T> {
  data?: T[] | (() => T[] | undefined);
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
  initialSorting?: SortingState;
  class?: string;
  emptyMessage?: string;
  caption?: string;
}

export const DataGrid = <T extends object>({
  data,
  columns,
  onRowClick,
  initialSorting = [],
  class: className,
  emptyMessage,
  caption,
}: DataGridProps<T>) => {
  const [sorting, setSorting] = createSignal<SortingState>(initialSorting);

  const resolvedData = createMemo(() => {
    if (typeof data === "function") {
      return data() || [];
    }
    return data || [];
  });

  const table = createSolidTable({
    get data() {
      return resolvedData();
    },
    columns,
    state: {
      get sorting() {
        return sorting();
      },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div class={`${styles.dataGrid} ${className || ""}`}>
      <table>
        {caption && <caption class={styles.caption}>{caption}</caption>}
        <thead>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th
                      colSpan={header.colSpan}
                      class={header.column.getCanSort() ? styles.sortable : ""}
                      onClick={header.column.getToggleSortingHandler()}
                      onKeyPress={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder ? null : (
                        <div class={styles.headerContent}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <span class={styles.sortIcon}>
                              {{
                                asc: "↑",
                                desc: "↓",
                              }[header.column.getIsSorted() as string] || "⇅"}
                            </span>
                          )}
                        </div>
                      )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For
            each={table.getRowModel().rows}
            fallback={
              emptyMessage && (
                <tr>
                  <td colSpan={columns.length} class={styles.emptyMessage}>
                    {emptyMessage}
                  </td>
                </tr>
              )
            }
          >
            {(row) => (
              <tr
                onClick={() => onRowClick?.(row.original)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onRowClick?.(row.original);
                  }
                }}
                tabIndex={onRowClick ? 0 : undefined}
                class={onRowClick ? styles.clickable : ""}
              >
                <For each={row.getVisibleCells()}>
                  {(cell) => <td>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
