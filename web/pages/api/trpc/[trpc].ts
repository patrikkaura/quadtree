import { Constants } from "@core/config";
import { PredictorManager } from "@core/manager/Predictor";
import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

export const t = initTRPC.create();
export const appRouter = t.router({
  quadtree: t.procedure
    .input(
      z.object({
        sequence: z
          .string()
          .min(Constants.MINIMUM_SEQUENCE_LENGTH)
          .max(Constants.MAXIMUM_SEQUENCE_LENGTH),
        threshold: z
          .number()
          .min(Constants.MINIMUM_THRESHOLD)
          .max(Constants.MAXIMUM_THRESHOLD),
      })
    )
    .mutation(({ input: { sequence, threshold } }) => {
      return PredictorManager.predict(sequence, threshold);
    }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
