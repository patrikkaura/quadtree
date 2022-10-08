import MuiAlert from "@mui/material/Alert";

type Props = {
  foundResults: boolean;
};

export function Alert({ foundResults }: Props) {
  const message = foundResults ? "Found results" : "No results found";
  const severity = foundResults ? "success" : "warning";

  return <MuiAlert severity={severity}>{message}</MuiAlert>;
}
