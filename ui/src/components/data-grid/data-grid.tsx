import {
  type ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { For } from "solid-js";

export interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
}

export const DataGrid = <T extends object>({
  data,
  columns,
  onRowClick,
}: DataGridProps<T>) => {
  const table = createSolidTable({
    get data() {
      return data;
    },
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div class="data-grid-container">
      <table>
        <thead>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr
                onClick={() => onRowClick?.(row.original)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onRowClick?.(row.original);
                  }
                }}
                tabIndex={0}
              >
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};
