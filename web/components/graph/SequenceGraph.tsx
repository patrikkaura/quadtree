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

function range(start: number, end: number, step: number) {
  return Array.from(
    { length: (end - start) / step + 1 },
    (_, i) => start + i * step
  );
}

export function SequenceGraph({ intervals, length }: Props) {
  const scale = useMemo(() => {
    if (length < 1000) {
      return 10;
    } else if (length < 2500) {
      return 100;
    }
    return 250;
  }, [length]);

  let labels = useMemo(() => {
    let flattendeIntervals = intervals
      .map(([start, end]) => [start - 1, start, end, end + 1])
      .flat(1);

    flattendeIntervals = [
      ...range(0, length, scale),
      ...flattendeIntervals,
    ].sort((a, b) => a - b);

    return flattendeIntervals;
  }, [intervals, length, scale]);

  const detectedIntervals: Record<number, number> = intervals.reduce(
    (acc, interval) => {
      return {
        ...acc,
        [interval[0]]: interval[1] - interval[0],
        [interval[1]]: interval[1] - interval[0],
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
        stepped: true,
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
