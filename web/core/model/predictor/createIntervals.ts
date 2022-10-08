import { Constants } from "@core/config";

import type { Prediction } from "./makePrediction";

export function createIntervals(predictions: Prediction[]) {
  return predictions.map(({ index }) => [
    index,
    index + Constants.FIXED_WINDOW_SIZE,
  ]);
}
