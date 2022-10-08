import { makePrediction } from "@core/model/predictor/makePrediction";
import { makeResults } from "@core/model/predictor/makeResults";
import { mergePredictions } from "@core/model/predictor/mergePredictions";
import { sequenceConvertor } from "@core/model/predictor/sequenceConvertor";
import { calculateFrequencyPerThousand } from "@core/model/stats/calculateFrequencePerThousand";
import { calculateGcCount } from "@core/model/stats/calculateGcCount";

export class PredictorManager {
  static predict(sequence: string, threshold: number) {
    const converted = sequenceConvertor(sequence);
    const predictions = makePrediction(converted, threshold);
    const mergedIntervals = mergePredictions(predictions);
    const results = makeResults(predictions, mergedIntervals, sequence);

    const stats = this.stats(sequence, results.length);

    return { results, intervals: mergedIntervals, stats };
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
