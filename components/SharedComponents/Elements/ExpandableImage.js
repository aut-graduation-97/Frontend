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
import logo from "../../../public/1.webp";

export default function ExpandableImage({ src }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const isPortrait = useMediaQuery("(max-width: 900px)");

  const open = Boolean(anchorEl);
  return (
    <>
      <Box
        sx={{
          mt: 1,
          p: 0.5,
          width: 200,
          height: isPortrait ? 100 : 200,
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
          src={logo}
          alt="image"
          width="200"
          height={isPortrait ? 100 : 200}
          layout="responsive"
          objectFit="cover"
          style={{ cursor: "pointer", margin: "auto", borderRadius: 3 }}
          onClick={() => window.open(src, "_blank")}
        />
      </Box>
    </>
  );
}
