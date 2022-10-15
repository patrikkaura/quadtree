import { calculateGcCount } from "./calculateGcCount";

describe("calculateGcCount", () => {
  it("should return 0 for sequence withou GC", () => {
    expect(calculateGcCount("ATATATATAT")).toEqual("0.00");
  });

  it("should return 37.5% for sequence with GC's", () => {
    expect(calculateGcCount("ATATGGGGGGATATAT")).toEqual("37.50");
  });
});
