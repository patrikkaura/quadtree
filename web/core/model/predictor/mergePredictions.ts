import { createIntervals } from "./createIntervals";
import type { Prediction } from "./makePrediction";

function mergeIntervals(intervals: number[][]) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  return sorted.reduce((acc, curr) => {
    const last = acc[acc.length - 1];
    if (last && last[1] >= curr[0]) {
      last[1] = Math.max(last[1], curr[1]);
    } else {
      acc.push(curr);
    }
    return acc;
  }, [] as number[][]);
}

export function mergePredictions(predictions: Prediction[]) {
  const intervals = createIntervals(predictions);
  return mergeIntervals(intervals);
}
