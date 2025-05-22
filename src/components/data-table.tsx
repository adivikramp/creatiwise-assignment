import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  type SortingState,
  type Row,
  type HeaderContext,
  type Table,
  flexRender,
} from "@tanstack/react-table";
import { Table as ShadcnTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownUp, ChevronDown, MoveDown, MoveUp } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useState } from "react";

import type { Article } from "@/types/types";

const columns: ColumnDef<Article>[] = [
  {
    id: "select",
    header: ({ table }: { table: Table<Article> }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all rows"
      />
    ),
    cell: ({ row }: { row: Row<Article> }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: () => (
      <div>
        Article Title
      </div>
    ),
    cell: ({ row }: { row: Row<Article> }) => <div className="text-xs md:text-sm text-left">{row.original.title}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "keyword",
    header: "Keyword [Traffic]",
    cell: ({ row }: { row: Row<Article> }) => (
      <div className="text-xs md:text-sm text-left ml-1">
        {row.original.keyword} [{row.original.traffic.toLocaleString()}]
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "words",
    header: "Words",
    cell: ({ row }: { row: Row<Article> }) => <div className="text-xs md:text-sm text-center">{row.original.words}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({ row }: { row: Row<Article> }) => <div className="text-xs md:text-sm text-center">{row.original.createdOn}</div>,
    enableSorting: true,
  },
  {
    id: "action",
    header: "Action",
    cell: () => (
      <div className="flex justify-center">
        <Button variant="outline" className="px-5 md:px-8 border-green-500 text-green-500 hover:bg-green-100 hover:text-green-600 cursor-pointer">
          View
        </Button>
      </div>
    ),
  },
  {
    id: "publish",
    header: "Publish",
    cell: () => (
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-auto" asChild>
            <div className="flex items-center justify-center p-2 gap-x-2 md:gap-x-4">
              <img src="https://avatars.githubusercontent.com/u/43032789?s=48&v=4" className="rounded-full h-6 md:h-8" />
              <ChevronDown className="ml-auto size-8 md:size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="-ml-6 w-auto md:-ml-0 md:w-44">
            <DropdownMenuRadioGroup value="wordpress">
              <DropdownMenuRadioItem value="wordpress">Wordpress</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="webflow">Webflow</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="canva">Canva</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ),
  },
];

export function DataTable({ data }: { data: Article[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable<Article>({
    data,
    columns,
    state: { sorting, pagination, rowSelection },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      <ShadcnTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-left font-medium cursor-pointer"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className={`flex items-center gap-1 ${header.id === "keyword" ? "justify-start" : "justify-center"} ${header.id === "title" ? "justify-start" : "justify-center"}`}>
                    {header.id !== "select" &&
                      header.id !== "title" &&
                      header.id !== "action" &&
                      header.id !== "publish" && (
                        <span className="mr-1">
                          {(header.column.getIsSorted() &&
                            { asc: <MoveUp size={16} />, desc: <MoveDown size={16} /> }[header.column.getIsSorted() as "asc" | "desc"]) || <ArrowDownUp size={18} />}
                        </span>
                      )}
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === "function"
                        ? header.column.columnDef.header(header.getContext() as HeaderContext<Article, unknown>)
                        : header.column.columnDef.header}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </ShadcnTable>

      <div className="flex items-center justify-between my-4">
        <div className="text-xs md:text-sm text-muted-foreground px-1 md:px-0">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-1 text-xs md:text-sm px-1 md:px-0">
          <span> Total <span className="font-bold">{table.getFilteredRowModel().rows.length}</span> Articles Titles</span> <span className="hidden md:flex">| {" "}</span>
          <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-0">
            <span>Show</span>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="w-16 md:w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30].map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>entries per page</span>
          </div>
        </div>
        <div className="flex text-sm w-[50px] items-center justify-center gap-x-1 mt-4 md:mt-0">
          <span className="border rounded-md bg-white text-gray-500 px-1">{table.getState().pagination.pageIndex + 1}</span> / <span>{table.getPageCount()}</span>
        </div>
      </div>
    </div>
  );
}