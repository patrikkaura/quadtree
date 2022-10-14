import { Constants } from "@core/config";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
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
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
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
    <>
      <Typography variant="h5">Input params</Typography>
      <Stack direction="row" spacing={4} style={{ paddingTop: 30 }}>
        <TextField
          required
          data-testid="sequence-input"
          label="Sequence"
          multiline
          rows={10}
          fullWidth
          value={sequence}
          disabled={isLoading || isDataLoaded}
          onChange={handleSetSequence}
          InputLabelProps={{ shrink: true }}
          helperText={`Sequence length (bp) has to be at least ${Constants.MINIMUM_SEQUENCE_LENGTH}bp. But maximum up to ${Constants.MAXIMUM_SEQUENCE_LENGTH}bp. Current length: ${sequence.length}`}
          error={inputError.sequence}
        />

        <Stack direction="column" spacing={2}>
          <TextField
            required
            data-testid="threshold-input"
            label="Threshold"
            type="number"
            value={threshold}
            disabled={isLoading || isDataLoaded}
            onChange={handleSetThreshold}
            InputLabelProps={{ shrink: true }}
            helperText={
              "Threshold has to be between 0 and 1. The recommended value is 0.2"
            }
            error={inputError.threshold}
          />
          <LoadingButton
            data-testid="start-button"
            color="inherit"
            variant="outlined"
            loading={isLoading}
            onClick={onAnalyseClick}
            disabled={
              inputError.sequence || inputError.threshold || isDataLoaded
            }
          >
            START ANALYSIS
          </LoadingButton>
          <Button
            data-testid="reset-button"
            color="error"
            variant="outlined"
            disabled={isLoading || !isDataLoaded}
            onClick={handleResetForm}
          >
            RESET ANALYSIS
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
