import { groupNucleicPairs } from "./utils";

describe("groupNucleicPairs", () => {
  it("should group nucleic pairs", () => {
    const sequence = "ATAGGGGGAACCC";

    expect(groupNucleicPairs(sequence)).toEqual([
      ["A"],
      ["T"],
      ["A"],
      ["G", "G", "G", "G", "G"],
      ["A", "A"],
      ["C", "C", "C"],
    ]);
  });
});
