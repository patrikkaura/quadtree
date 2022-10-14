import { useMemo } from "react";

import { groupNucleicPairs } from "./utils";

export type Props = {
  index: number;
  sequence: string;
};

const BASE_GROUP_STYLE = {
  fontSize: 20,
  fontWeight: 500,
  borderBottom: "1px solid black",
};

export function Sequence({ index, sequence }: Props) {
  const grouped = groupNucleicPairs(sequence);

  const sequenceComponents = useMemo(
    () =>
      grouped.map((group, index) => {
        if (group[0] === "G" && group.length > 1) {
          return (
            <span
              key={index}
              style={{
                ...BASE_GROUP_STYLE,
                color: "#ff5e7c",
              }}
            >
              {group}
            </span>
          );
        } else if (group[0] === "C" && group.length > 1) {
          return (
            <span
              key={index}
              style={{
                ...BASE_GROUP_STYLE,
                color: "#6786C6",
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
