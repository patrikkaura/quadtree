import GitHubIcon from "@mui/icons-material/GitHub";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import MuiToolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Toolbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation={0}>
        <MuiToolbar>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              QUADTREE - PREVIEW PAGE
            </Typography>
            <Chip label="v1.0.0" color="default" />
          </Stack>
          <IconButton href="https://github.com/patrikkaura/quadtree">
            <GitHubIcon color="action" />
          </IconButton>
        </MuiToolbar>
      </AppBar>
      <Divider />
    </Box>
  );
}
