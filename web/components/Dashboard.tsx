import { DEFAULT_SEQUENCE } from "@core/config";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as Sentry from "@sentry/react";
import { trpc } from "@utils/trpc";
import { useState } from "react";

import { Alert } from "./Alert";
import { InputForm } from "./form/InputForm";
import { SequenceGraph } from "./graph/SequenceGraph";
import { InfoCards } from "./info-cards/InfoCards";
import Table from "./table/Table";
import { Toolbar } from "./Toolbar";

function Dashboard() {
  const [sequence, setSequence] = useState(DEFAULT_SEQUENCE);
  const [threshold, setThreshold] = useState(0.2);

  const quadtreeMutation = trpc.quadtree.useMutation();

  return (
    <div style={{ maxWidth: 1200, margin: "auto" }}>
      <Toolbar />

      <Stack direction="column" spacing={5} style={{ padding: 30 }}>
        <Grid container spacing={2}>
          <Grid item>
            <InputForm
              isDataLoaded={Boolean(quadtreeMutation.data)}
              isLoading={quadtreeMutation.isLoading}
              sequence={sequence}
              threshold={threshold}
              onSequenceChange={setSequence}
              onThresholdChange={setThreshold}
              onDataReset={quadtreeMutation.reset}
              onAnalyseClick={() =>
                quadtreeMutation.mutate({ sequence, threshold })
              }
            />
          </Grid>
        </Grid>

        {quadtreeMutation.isSuccess && (
          <Alert
            foundResults={Boolean(quadtreeMutation.data.intervals.length)}
          />
        )}

        {quadtreeMutation.isSuccess &&
          Boolean(quadtreeMutation.data.intervals.length) && (
            <Stack direction="column" spacing={2}>
              <Typography variant="h5" component="div">
                Results and statistics
              </Typography>
              <InfoCards
                threshold={threshold}
                stats={quadtreeMutation.data.stats}
              />
              <SequenceGraph
                intervals={quadtreeMutation.data.intervals}
                length={sequence.length}
              />

              <Table data={quadtreeMutation.data?.results} />
            </Stack>
          )}
      </Stack>
    </div>
  );
}

export default Sentry.withProfiler(Dashboard);
