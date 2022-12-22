import { createIntervals } from "./createIntervals";

describe("createIntervals", () => {
  it("should create intervals", () => {
    expect(
      createIntervals([
        { index: 1, score: 1 },
        { index: 100, score: 1 },
      ])
    ).toEqual([
      [1, 3],
      [100, 102],
    ]);
  });
});
