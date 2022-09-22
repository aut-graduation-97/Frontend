import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function NewTweetButton({ onClick, shift }) {
  return (
    // FIXME: change the icon and maybe position ???
    <Box
      sx={{
        position: "fixed",
        bottom: shift ? 90 : 30,
        left: shift ? 10 : "15vw",
        zIndex: 1000,
      }}
    >
      <IconButton
        color="primary"
        aria-label="new-tweet"
        component="label"
        onClick={onClick}
      >
        <MapsUgcIcon sx={{ fontSize: "50px" }} />
      </IconButton>
    </Box>
  );
}
