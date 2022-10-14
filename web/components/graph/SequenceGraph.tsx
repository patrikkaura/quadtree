import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useMemo } from "react";
import { Line } from "react-chartjs-2";

import { getGraphScale, range } from "./utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  intervals: number[][];
  length: number;
};

export function SequenceGraph({ intervals, length }: Props) {
  console.log({ length });

  const graphScale = useMemo(() => getGraphScale(length), [length]);

  let labels = useMemo(() => {
    let flattenedIntervals = intervals
      .map(([start, end]) => [start - 1, start, end, end + 1])
      .flat(1);

    flattenedIntervals = [
      ...range(0, length, graphScale),
      ...flattenedIntervals,
    ].sort((a, b) => a - b);

    flattenedIntervals = [
      ...flattenedIntervals,
      ...intervals.map(([start, end]) => Math.floor((start + end) / 2)),
    ];

    return flattenedIntervals.sort((a, b) => a - b);
  }, [intervals, length, graphScale]);

  const detectedIntervals: Record<number, number> = intervals.reduce(
    (acc, [start, end]) => {
      return {
        ...acc,
        [Math.floor((start + end) / 2)]: end - start,
      };
    },
    {}
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Putative G4",
        data: labels.map((position) => detectedIntervals[position] ?? 0),
        borderColor: "rgb(103, 134, 198)",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  };

  return (
    <Line
      height={100}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Quadtree",
          },
        },
        normalized: true,
      }}
      data={data}
    />
  );
}
