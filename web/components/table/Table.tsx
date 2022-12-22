import { QuadtreeData } from "@components/types";
import type { MRT_ColumnDef } from "material-react-table"; // If using TypeScript (optional, but recommended)
import MaterialReactTable from "material-react-table";
import React, { useMemo } from "react";

import { Sequence } from "./Sequence";

type PredictorResult = QuadtreeData["results"][0];

export type Props = {
  data: PredictorResult[];
};

export function Table({ data }: Props) {
  const columns = useMemo<MRT_ColumnDef<PredictorResult>[]>(
    () => [
      {
        accessorFn: (originalRow) => originalRow.interval[0],
        id: "start",
        header: "Start",
        size: 10,
      },
      {
        accessorFn: (originalRow) => originalRow.interval[1],
        id: "end",
        header: "End",
        size: 10,
      },
      {
        accessorFn: (originalRow) => originalRow.length,
        id: "length",
        header: "Length",
        size: 10,
      },
      {
        accessorFn: (originalRow) => originalRow.meanScore,
        id: "meanScore",
        header: "Avg. score",
        size: 10,
        Cell: ({ cell }) => cell.getValue<number>().toFixed(2),
      },
      {
        accessorFn: (originalRow) => originalRow.sequence,
        id: "sequence",
        header: "Sequence",
        size: 20,
        Cell: ({ cell, row }) => (
          <Sequence index={row.index} sequence={cell.getValue<string>()} />
        ),
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowNumbers
      rowNumberMode="original"
      enableColumnFilters
      enableTopToolbar
      enableColumnActions={false}
      muiTableBodyRowProps={{ hover: true }}
      enableColumnOrdering
      enableRowSelection={false}
      enableDensityToggle={false}
      enableFullScreenToggle={false}
    />
  );
}
