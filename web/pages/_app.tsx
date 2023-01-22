import "../styles/globals.css";

import { trpc } from "@utils/trpc";
import type { AppProps } from "next/app";
import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export { reportWebVitals } from "next-axiom";
export default trpc.withTRPC(MyApp);
