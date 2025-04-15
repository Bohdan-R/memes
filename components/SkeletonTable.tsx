"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn,
  TableCell,
} from "@heroui/react";

const columns = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "likes",
    label: "Likes",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const SkeletonTable = () => {
  const skeletonRows = Array.from({ length: 10 });

  return (
    <Table aria-label="Skeleton table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={
              column.key === columns[columns.length - 1].key ? "end" : "start"
            }
            className="text-xl "
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {skeletonRows.map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-12" />
            </TableCell>
            <TableCell>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
            </TableCell>
            <TableCell>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-16" />
            </TableCell>
            <TableCell>
              <div className="ml-auto h-8 bg-gray-200 rounded animate-pulse w-20" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SkeletonTable;
