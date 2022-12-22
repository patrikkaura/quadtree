import { score } from "./model";
import type { ConvertedSequence } from "./sequenceConvertor";

export type Prediction = {
  index: number;
  score: number;
};

export function makePrediction(
  convertedSequences: ConvertedSequence[],
  threshold: number
) {
  const calculatedScores = convertedSequences.map(
    (convertedSequence) => score(convertedSequence)[1]
  );

  return calculatedScores
    .map((score, index) => {
      if (score >= threshold) {
        return {
          index,
          score,
        };
      }
    })
    .filter((prediction) => prediction !== undefined) as Prediction[];
}
