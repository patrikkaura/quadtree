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

    return {
      index,
      interval,
      length: interval[1] - interval[0],
      sequence: sequence.slice(interval[0], interval[1]),
      meanScore: scores.reduce((a, b) => a + b, 0) / scores.length,
      scores,
    };
  });
}
