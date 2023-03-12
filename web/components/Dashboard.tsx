import { Constants, DEFAULT_SEQUENCE } from "@core/config";
import * as Sentry from "@sentry/react";
import { trpc } from "@utils/trpc";
import { useState } from "react";

import { Alert } from "./Alert";
import { InputForm } from "./form/InputForm";
import { SequenceGraph } from "./graph/SequenceGraph";
import { InfoCards } from "./info-cards/InfoCards";
import { Table } from "./table/Table";
import { Toolbar } from "./Toolbar";

export function Dashboard() {
  const [sequence, setSequence] = useState(DEFAULT_SEQUENCE);
  const [threshold, setThreshold] = useState(Constants.DEFAULT_THRESHOLD);

  const quadtreeMutation = trpc.quadtree.useMutation();

  return (
    <div className="m-auto max-w-6xl">
      <Toolbar />

      <div className="flex flex-col gap-10 p-10">
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

        {quadtreeMutation.isSuccess && (
          <Alert
            foundResults={Boolean(quadtreeMutation.data.intervals.length)}
          />
        )}

        {quadtreeMutation.isSuccess &&
          Boolean(quadtreeMutation.data.intervals.length) && (
            <div className="flex flex-col gap-10">
              <h1 className="text-3xl">Results and statistics</h1>
              <InfoCards
                threshold={threshold}
                stats={quadtreeMutation.data.stats}
              />
              <SequenceGraph
                intervals={quadtreeMutation.data.intervals}
                length={sequence.length}
              />

              <Table data={quadtreeMutation.data?.results} />
            </div>
          )}
      </div>
    </div>
  );
}

export default Sentry.withProfiler(Dashboard);
