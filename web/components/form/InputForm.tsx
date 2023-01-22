import { Constants } from "@core/config";
import CircularProgress from "@mui/material/CircularProgress";
import { ChangeEvent, useCallback, useMemo } from "react";

export type Props = {
  isDataLoaded: boolean;
  isLoading: boolean;
  sequence: string;
  threshold: number;
  onSequenceChange: (sequence: string) => void;
  onThresholdChange: (threshold: number) => void;
  onDataReset: () => void;
  onAnalyseClick: () => void;
};

export function InputForm({
  isDataLoaded = false,
  isLoading = false,
  sequence,
  threshold,
  onSequenceChange,
  onThresholdChange,
  onDataReset,
  onAnalyseClick,
}: Readonly<Props>) {
  const handleSetSequence = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => {
      onSequenceChange(value);
    },
    [onSequenceChange]
  );

  const handleSetThreshold = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      onThresholdChange(parseFloat(value));
    },
    [onThresholdChange]
  );

  const handleResetForm = useCallback(() => {
    onDataReset();
  }, [onDataReset]);

  const inputError = useMemo(() => {
    const sequenceError =
      sequence.length <= Constants.MINIMUM_SEQUENCE_LENGTH ||
      sequence.length >= Constants.MAXIMUM_SEQUENCE_LENGTH;
    const thresholdError =
      threshold <= Constants.MINIMUM_THRESHOLD ||
      threshold >= Constants.MAXIMUM_THRESHOLD;

    return {
      sequence: sequenceError,
      threshold: thresholdError,
    };
  }, [sequence, threshold]);

  return (
    <div className="border shadow-sm rounded-xl py-6 px-10">
      <h1 className="text-3xl">Input params</h1>
      <div className="flex flex-col md:flex-row gap-4 pt-8">
        <div className="flex-2">
          <div className="flex flex-col gap-2">
            <label className="text-md font-medium">Sequence</label>
            <textarea
              className="p-2 border-2 border-nord5 rounded-md disabled:opacity-50"
              required
              name="sequence"
              data-testid="sequence-input"
              rows={10}
              value={sequence}
              disabled={isLoading || isDataLoaded}
              onChange={handleSetSequence}
            />

            <p className="text-sm font-light">
              {`Sequence length (bp) has to be at least ${Constants.MINIMUM_SEQUENCE_LENGTH}bp. But maximum up to ${Constants.MAXIMUM_SEQUENCE_LENGTH}bp. Current length: ${sequence.length}`}
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-2">
            <label className="text-md font-medium">Threshold</label>
            <input
              className="p-2 border-2 border-nord5 rounded-md disabled:opacity-50"
              data-testid="threshold-input"
              type="number"
              value={threshold}
              disabled={isLoading || isDataLoaded}
              onChange={handleSetThreshold}
            />
            <p className="text-sm font-light">
              Threshold has to be between 0 and 1. The recommended value is 0.9
              (probability of quadruplex existence in given window).
            </p>

            <button
              data-testid="start-button"
              className="border-2 border-nord14 p-2 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-nord14 hover:text-white"
              onClick={onAnalyseClick}
              disabled={
                inputError.sequence ||
                inputError.threshold ||
                isDataLoaded ||
                isLoading
              }
            >
              {isLoading ? (
                <CircularProgress className="text-nord14" size={20} />
              ) : (
                "START ANALYSIS"
              )}
            </button>
            <button
              className="border-2 border-nord11 p-2 text-gray-700 rounded-lg hover:bg-nord11 hover:text-white"
              data-testid="reset-button"
              disabled={isLoading || !isDataLoaded}
              onClick={handleResetForm}
            >
              RESET ANALYSIS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
