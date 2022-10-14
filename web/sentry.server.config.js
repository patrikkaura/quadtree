import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://e42ae3280d9a470db8fe18aa43da1335@o1305822.ingest.sentry.io/4503983610462208",
  tracesSampleRate: 1.0,
});
