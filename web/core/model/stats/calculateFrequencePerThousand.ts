type CalculateFrequencePerThousandInput = {
  numberOfQuadruplexes: number;
  sequenceLength: number;
};

export function calculateFrequencyPerThousand({
  numberOfQuadruplexes,
  sequenceLength,
}: CalculateFrequencePerThousandInput) {
  return ((numberOfQuadruplexes / sequenceLength) * 1000).toFixed(2);
}
