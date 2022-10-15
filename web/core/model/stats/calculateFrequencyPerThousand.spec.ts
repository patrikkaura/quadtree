import { calculateFrequencyPerThousand } from "./calculateFrequencyPerThousand";

describe("calculateFrequencyPerThousand", () => {
  it('should return "0.00" when numberOfQuadruplexes is 0', () => {
    expect(
      calculateFrequencyPerThousand({
        numberOfQuadruplexes: 0,
        sequenceLength: 1000,
      })
    ).toBe("0.00");
  });
  it('should return "1" when numberOfQuadruplexes is 1', () => {
    expect(
      calculateFrequencyPerThousand({
        numberOfQuadruplexes: 1,
        sequenceLength: 1000,
      })
    ).toBe("1.00");
  });

  it('should return "0.5" when numberOfQuadruplexes is 1 in 2000bp', () => {
    expect(
      calculateFrequencyPerThousand({
        numberOfQuadruplexes: 1,
        sequenceLength: 2000,
      })
    ).toBe("0.50");
  });
});
