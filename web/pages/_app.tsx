import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { trpc } from "@utils/trpc";
import type { AppProps } from "next/app";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export { reportWebVitals } from "next-axiom";
export default trpc.withTRPC(MyApp);
