import { sequenceConvertor } from "./sequenceConvertor";

describe("sequenceConvertor", () => {
  it("should convert sequence to array of numbers", () => {
    expect(
      sequenceConvertor("ATATAGGGATATACCTATAGATATAGGGATATACCTATAGATATACCCATAC")
    ).toEqual([
      [
        0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 0, 0,
        0, 0, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1,
        1, 1, 0, 0,
      ],
      [
        0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0,
        0, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 1, 1,
        1, 0, 0, 0,
      ],
    ]);
  });
});
