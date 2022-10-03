import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Chip,
  TextField,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditIcon from "@mui/icons-material/Edit";
import { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditProfileModal from "../EditProfileModal";
import { toast } from "react-toastify";

export default function ContactTable({ isEditable, data }) {
  // ONLINE - check the data prop and just feed it to the JSX
  const [isEditing, setIsEditing] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [changedContact, setChangedContact] = useState({});

  const tablet = useMediaQuery("(min-width:900px) and (max-width:1100px)");

  const getChip = useCallback(
    (text, label) => {
      if (isEditing) return;
      return (
        <Chip
          label={text}
          variant="outlined"
          size="small"
          clickable
          color="primary"
          sx={styles.chip}
          onClick={() => {
            if (label === "phone" || label === "email") return null;
            return window.open(text, "_blank");
          }}
        />
      );
    },
    [isEditing]
  );

  const getTextField = useCallback(
    (prevValue, label) => {
      if (isEditing) {
        return (
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label={label}
            variant="standard"
            defaultValue={prevValue}
            // changing state object safely
            onChange={(e) =>
              setChangedContact((prev) => ({
                ...prev,
                [label]: e.target.value,
              }))
            }
            inputProps={{
              style: {
                fontSize: 12,
                direction: "ltr",
              },
            }}
            InputLabelProps={{ style: { fontSize: 13 } }}
          />
        );
      }
    },
    [isEditing]
  );

  const submitHandler = (e) => {
    if (Object.keys(changedContact).length === 0) {
      toast.warn("هیچ فیلدی تغییر نکرده است");
      return;
    }

    setOpenEditModal(true);
  };

  return (
    <>
      <EditProfileModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        toPut={changedContact}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        {isEditable && (
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ borderRadius: 0 }}
            onClick={(e) => setIsEditing(!isEditing)}
          >
            <EditIcon />
            <Typography variant={"caption"}> ویرایش</Typography>
          </IconButton>
        )}

        {isEditing && (
          <Button
            variant="contained"
            size="small"
            onClick={submitHandler}
            sx={{ mr: 4 }}
            color={"error"}
          >
            بروزرسانی تغییرات
          </Button>
        )}
      </Box>

      <Paper elevation={1}>
        <TableContainer component={Paper} sx={styles.tabContainer}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <AlternateEmailIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip("folani@yahoo.com", "email")}
                  {getTextField("folani@yahoo.com", "email")}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <PhoneAndroidIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip("0910 600 8858", "phone")}
                  {getTextField("0910 600 8858", "phone")}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <TwitterIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "twitter"
                  )}
                  {getTextField(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "twitter"
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <TelegramIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "telegram"
                  )}
                  {getTextField(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "telegram"
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <InstagramIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "instagram"
                  )}
                  {getTextField(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "instagram"
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <GitHubIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "github"
                  )}
                  {getTextField(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "github"
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <LinkedInIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "linkedin"
                  )}
                  {getTextField(
                    "https://www.youtube.com/watch?v=hPr-Yc92qaY",
                    "linkedin"
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

const styles = {
  chip: {
    width: {
      xs: 180,
      sm: 180,
      md: 100,
      lg: 180,
    },
    direction: "ltr",
    borderColor: "#9a2c42 ",
  },
  tabContainer: { overflowX: "auto", width: "100%", mt: 2 },
};
