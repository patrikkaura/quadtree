import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type Props = {
  foundResults: boolean;
};

export function Alert({ foundResults }: Props) {
  const message = foundResults ? "Found results" : "No results found";
  const severity = foundResults ? "success" : "warning";

  return (
    <div
      className={`flex flex-row rounded-md  gap-2 p-2 text-white ${
        foundResults ? "bg-nord14" : "bg-nord11"
      }`}
    >
      {severity === "success" ? (
        <CheckCircleOutlineIcon />
      ) : (
        <ErrorOutlineIcon />
      )}
      {message}
    </div>
  );
}
