import { getGraphScale, getRange } from "./utils";

describe("utils", () => {
  it.each([
    [2, 10],
    [999, 10],
    [1000, 100],
    [1500, 100],
    [2501, 250],
    [9999999, 250],
  ])("should return the correct scale for %i expect %i", (value, expected) => {
    expect(getGraphScale(value)).toEqual(expected);
  });

  it("should return the correct range with step 1", () => {
    expect(getRange(0, 10, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return the correct range with step 2", () => {
    expect(getRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
