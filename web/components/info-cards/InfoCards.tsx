import { QuadtreeData } from "@components/types";
import Stack from "@mui/material/Stack";
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
        width: 200,
        color: "#98DDCA",
      },
      {
        header: "Threshold",
        content: threshold,
        width: 200,
        color: "#98DD99",
      },
      {
        header: "Frequency per thousand",
        content: frequencyPerThousand,
        width: 200,
        color: "#D5ECC2",
      },
      { header: "GC count", content: gcCount, width: 200, color: "#FFD3B4" },
      {
        header: "Number of quadruplexes",
        content: numberOfQuadruplexes,
        width: 200,
        color: "#FFAAA7",
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
    <Stack direction="row" spacing={2}>
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </Stack>
  );
}
