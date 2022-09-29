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
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditProfileModal from "../EditProfileModal";
import { toast } from "react-toastify";

export default function ContactTable({ isEditable, data }) {
  // ONLINE - check the data prop and just feed it to the JSX

  const [isEditing, setIsEditing] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [changedContact, setChangedContact] = useState({});

  const tablet = useMediaQuery("(min-width:900px) and (max-width:1100px)");

  const getChip = (text) => {
    if (isEditing) return;

    return (
      <Chip
        label={text}
        variant="outlined"
        size="small"
        clickable
        color="primary"
        sx={{ width: tablet ? 100 : 180, direction: "ltr" }}
        onClick={() => window.open(text, "_blank")}
      />
    );
  };

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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            ذخیره تغییرات
          </Button>
        )}
      </Box>

      <Paper elevation={1}>
        <TableContainer
          component={Paper}
          sx={{ overflowX: "auto", width: "100%", mt: 2 }}
        >
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <AlternateEmailIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip("folani@yahoo.com")}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      // changing state object safely
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <PhoneAndroidIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip("0910 600 8858")}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="Phone Number"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <TwitterIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div"
                  )}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="Tweeter"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          twitter: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <TelegramIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div"
                  )}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="Telegram"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          telegram: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <InstagramIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip("t.me/fnsdjgnskngkjds")}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="Instagram"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          instagram: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <GitHubIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div"
                  )}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="GitHub"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          github: e.target.value,
                        }))
                      }
                    />
                  )}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right" sx={{ py: 1 }}>
                  <LinkedInIcon />
                </TableCell>
                <TableCell align="left" sx={{ py: 1 }}>
                  {getChip(
                    "https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div"
                  )}
                  {isEditing && (
                    <TextField
                      id="standard-basic"
                      label="LinkedIn"
                      variant="standard"
                      defaultValue={"--previous value--"}
                      onChange={(e) =>
                        setChangedContact((prev) => ({
                          ...prev,
                          linkedin: e.target.value,
                        }))
                      }
                    />
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
