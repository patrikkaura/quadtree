import * as Sentry from "@sentry/nextjs";
import { BrowserTracing } from "@sentry/tracing";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://8ffc507866514fb9a2c780beb9c70bb9@o1305822.ingest.sentry.io/4504371469746176",
  tracesSampleRate: 0.8,
  integrations: [new BrowserTracing()],
});
