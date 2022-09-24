import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Chip,
  useMediaQuery,
  TextField,
  Typography,
  Button,
  Box,
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
import EditContactTableModal from "./EditContactTableModal";

export default function ContactTable({ isEditable }) {
  const [isEditing, setIsEditing] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [changedContact, setChangedContact] = useState({
    email: null,
    phone: null,
    twitter: null,
    telegram: null,
    instagram: null,
    github: null,
    linkedin: null,
  });

  const getChip = (text) => {
    if (isEditing) return;
    return (
      <Chip
        label={text}
        variant="outlined"
        size="small"
        clickable
        color="primary"
        //FIXME: width most not be hardcoded
        sx={{ width: "180px", direction: "ltr" }}
      />
    );
  };
  console.log(openEditModal);

  return (
    <>
      <EditContactTableModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        changedContact={changedContact}
      />
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
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
            onClick={() => setOpenEditModal(true)}
            sx={{ mr: 4 }}
          >
            ذخیره
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
                <TableCell align="right">
                  <AlternateEmailIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <PhoneAndroidIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <TwitterIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <TelegramIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <InstagramIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <GitHubIcon />
                </TableCell>
                <TableCell align="left">
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
                <TableCell align="right">
                  <LinkedInIcon />
                </TableCell>
                <TableCell align="left">
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
