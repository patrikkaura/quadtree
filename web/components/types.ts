import { inferProcedureOutput } from "@trpc/server";
import { AppRouter } from "pages/api/trpc/[trpc]";

export type QuadtreeData = inferProcedureOutput<AppRouter["quadtree"]>;
