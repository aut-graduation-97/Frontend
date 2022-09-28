import { useState } from "react";
import {
  Box,
  Modal,
  Paper,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ExpandableImage({ src }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isPortrait = useMediaQuery("(max-width: 900px)");

  const open = Boolean(anchorEl);
  return (
    <>
      <Paper
        sx={{
          m: "auto",
          mt: 3,
          width: 300,
          height: 200,
        }}
        elevation={3}
        onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
        onMouseLeave={(e) => setAnchorEl(null)}
      >
        {!isPortrait && (
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={() => setAnchorEl(null)}
            disableRestoreFocus
          >
            <Typography sx={{ px: 1 }} variant={"caption"}>
              برای مشاهده کیفیت اصلی کلیک کنید.
            </Typography>
          </Popover>
        )}
        <Image
          src={src}
          alt="image"
          width="300"
          height="200"
          layout="responsive"
          style={{ cursor: "pointer", margin: "auto", borderRadius: 3 }}
          onClick={() => window.open(src, "_blank")}
        />
      </Paper>
    </>
  );
}
