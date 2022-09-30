import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

export default function NewTweetButton({ onClick, shift }) {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: shift ? 90 : 30,
        left: shift ? 10 : "15vw",
        zIndex: 1000,
      }}
    >
      <Fab color={"secondary"} aria-label="like" onClick={onClick}>
        <EditIcon />
        <AddIcon sx={{ mr: -1, mb: 1, p: 0 }} />
      </Fab>
    </Box>
  );
}
