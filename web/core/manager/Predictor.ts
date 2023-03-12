import { Constants } from "@core/config";
import { makePrediction } from "@core/model/predictor/makePrediction";
import { makeResults } from "@core/model/predictor/makeResults";
import { mergeIntervals,mergePredictions } from "@core/model/predictor/mergePredictions";
import { sequenceConvertor } from "@core/model/predictor/sequenceConvertor";
import { calculateFrequencyPerThousand } from "@core/model/stats/calculateFrequencyPerThousand";
import { calculateGcCount } from "@core/model/stats/calculateGcCount";

export class PredictorManager {
  static predict(sequence: string, threshold: number) {
    const converted = sequenceConvertor(sequence);
    const predictions = makePrediction(converted, threshold);
    const mergedIntervals = mergePredictions(predictions);
    const results = makeResults(predictions, mergedIntervals, sequence);

    const stats = this.stats(sequence, results.length);

    const intervals = mergeIntervals(
      mergedIntervals.map(([start, end]) => [start, end + Constants.FIXED_WINDOW_SIZE])
    )


    return { 
      results, 
      stats,
      intervals, 
    };
  }

  private static stats(sequence: string, numberOfQuadruplexes: number) {
    const frequencyPerThousand = calculateFrequencyPerThousand({
      sequenceLength: sequence.length,
      numberOfQuadruplexes,
    });
    const gcCount = calculateGcCount(sequence);

    return {
      gcCount,
      frequencyPerThousand,
      numberOfQuadruplexes,
      sequenceLength: sequence.length,
    };
  }
}
