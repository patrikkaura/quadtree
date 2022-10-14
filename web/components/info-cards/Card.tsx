import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type Props = {
  header: string;
  content: string | number;
  width: number;
  color: string;
};

export function Card({ header, content, width, color }: Props) {
  return (
    <MuiCard
      style={{
        width,
        borderTop: "5px solid",
        borderColor: color,
      }}
    >
      <MuiCardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {header}
        </Typography>
        <Typography sx={{ fontSize: 25 }}>{content}</Typography>
      </MuiCardContent>
    </MuiCard>
  );
}
