import { useMemo } from "react";

import { groupNucleicPairs } from "./utils";

type Props = {
  sequence: string;
};

export function Sequence({ sequence }: Props) {
  const grouped = groupNucleicPairs(sequence);

  const sequenceComponents = useMemo(
    () =>
      grouped.map((group, index) => {
        if (group[0] === "G" && group.length > 1) {
          return (
            <span
              key={index}
              style={{
                color: "#ff5e7c",
                fontSize: 20,
                fontWeight: 500,
                borderBottom: "1px solid black",
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
                color: "#6786C6",
                fontSize: 20,
                fontWeight: 500,
                borderBottom: "1px solid black",
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

  return <>{sequenceComponents}</>;
}
