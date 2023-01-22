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
          return (
            <span
              className={group[0] === "C" ? "text-sky-600" : "text-red-600"}
              key={index}
              style={{
                ...BASE_GROUP_STYLE,
              }}
            >
              {group}
            </span>
          );
        } else if (
          group.length === 1 &&
          (group[0] === "G" || group[0] === "C")
        ) {
          return (
            <span
              className={group[0] === "C" ? "text-sky-300" : "text-red-300"}
              key={index}
              style={{
                ...BASE_NUCLEIC_STYLE,
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
