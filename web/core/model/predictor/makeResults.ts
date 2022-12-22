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
      interval,
      length: end + 30 - start,
      sequence: sequence.slice(start, end + 30),
      meanScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      scores,
    };
  });
}
