import { Constants } from "@core/config";

export type ConvertedSequence = number[];

const CONVERSION_MAPPING: Record<string, number> = {
  G: -1,
  C: 1,
};

export function sequenceConvertor(sequence: string): ConvertedSequence[] {
  const converted = [];

  for (let i = 0; i < sequence.length - Constants.FIXED_WINDOW_SIZE; i++) {
    const convertedSequence = sequence
      .slice(i, i + Constants.FIXED_WINDOW_SIZE)
      .split("")
      .map((base) => {
        const normalizedBase = base.toUpperCase();

        return CONVERSION_MAPPING[normalizedBase] ?? 0;
      });

    converted.push(convertedSequence);
  }

  return converted;
}
