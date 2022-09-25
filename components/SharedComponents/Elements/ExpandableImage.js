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
  const [openOriginal, setOpenOriginal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const isPortrait = useMediaQuery("(max-width: 900px)");

  const imageClickHandler = () => {
    isPortrait ? router.replace(src) : setOpenOriginal(true);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Modal
        open={openOriginal}
        onClose={() => setOpenOriginal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper className={"modal"}>
          <Image src={src} alt="image" width={"1920"} height={"1080"} />
        </Paper>
      </Modal>

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
          onClick={imageClickHandler}
        />
      </Paper>
    </>
  );
}
