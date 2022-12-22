import { mergePredictions } from "./mergePredictions";

describe("mergePredictions", () => {
  it("should merge predictions", () => {
    expect(
      mergePredictions([
        { index: 1, score: 1 },
        { index: 20, score: 1 },
        { index: 71, score: 1 },
        { index: 999, score: 1 },
      ])
    ).toEqual([
      [1, 3],
      [20, 22],
      [71, 73],
      [999, 1001],
    ]);
  });
});
