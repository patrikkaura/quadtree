import { makeResults } from "./makeResults";

describe("makeResults", () => {
  it("should return predictor results", () => {
    expect(
      makeResults(
        [{ index: 1, score: 0.2 }],
        [[1, 50]],
        "ATATATATATATATATATATATATATATATATATATATATATATATAT"
      )
    ).toEqual([
      {
        index: 0,
        interval: [1, 50],
        length: 49,
        meanScore: 0.2,
        scores: [0.2],
        sequence: "TATATATATATATATATATATATATATATATATATATATATATATAT",
      },
    ]);
  });
});
