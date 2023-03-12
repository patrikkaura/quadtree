import { Constants } from "@core/config";

import type { Prediction } from "./makePrediction";

export function makeResults(
  predictions: Prediction[],
  mergedIntervals: number[][],
  sequence: string
) {
  return mergedIntervals.map((interval, index) => {
    const scores = predictions
      .map((prediction) => {
        const [start, end] = interval;

        if (start <= prediction.index && prediction.index <= end) {
          return prediction.score;
        }
      })
      .filter((score) => score !== undefined) as number[];

    const [start, end] = interval;

    return {
      index,
      interval: [start, end + Constants.FIXED_WINDOW_SIZE],
      length: end + Constants.FIXED_WINDOW_SIZE - start,
      sequence: sequence.slice(start, end + Constants.FIXED_WINDOW_SIZE),
      meanScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      scores,
    };
  });
}
