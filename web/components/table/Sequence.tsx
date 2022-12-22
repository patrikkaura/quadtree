import { useMemo } from "react";

import { groupNucleicPairs } from "./utils";

export type Props = {
  index: number;
  sequence: string;
};

const BASE_NUCLEIC_STYLE = {
  fontSize: 21,
  fontWeight: 500,
};

const BASE_GROUP_STYLE = {
  ...BASE_NUCLEIC_STYLE,
  borderBottom: "1px solid black",
};

export function Sequence({ index, sequence }: Props) {
  const grouped = groupNucleicPairs(sequence);

  const sequenceComponents = useMemo(
    () =>
      grouped.map((group, index) => {
        if (group.length > 1 && (group[0] === "C" || group[0] === "G")) {
          const color = group[0] === "C" ? "#6786C6" : "#ff5e7c";

          return (
            <span
              key={index}
              style={{
                ...BASE_GROUP_STYLE,
                color,
              }}
            >
              {group}
            </span>
          );
        } else if (
          group.length === 1 &&
          (group[0] === "G" || group[0] === "C")
        ) {
          const color = group[0] === "C" ? "#546ba8" : "#bf5a60";

          return (
            <span
              key={index}
              style={{
                ...BASE_NUCLEIC_STYLE,
                color,
              }}
            >
              {group}
            </span>
          );
        }

        return group;
      }),
    [grouped]
  );

  return <span data-testid={`sequence-${index}`}>{sequenceComponents}</span>;
}
