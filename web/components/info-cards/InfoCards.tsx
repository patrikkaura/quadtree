import { QuadtreeData } from "@components/types";
import { useMemo } from "react";

import { Card } from "./Card";

export type Props = {
  threshold: number;
  stats: QuadtreeData["stats"];
};

export function InfoCards({ threshold, stats }: Props) {
  const {
    sequenceLength,
    frequencyPerThousand,
    gcCount,
    numberOfQuadruplexes,
  } = stats;

  const cardData = useMemo(
    () => [
      {
        header: "Sequence length",
        content: sequenceLength,
      },
      {
        header: "Threshold",
        content: threshold,
      },
      {
        header: "Frequency per thousand",
        content: frequencyPerThousand,
      },
      { header: "GC count", content: gcCount },
      {
        header: "Number of quadruplexes",
        content: numberOfQuadruplexes,
      },
    ],
    [
      sequenceLength,
      threshold,
      frequencyPerThousand,
      gcCount,
      numberOfQuadruplexes,
    ]
  );

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
}
