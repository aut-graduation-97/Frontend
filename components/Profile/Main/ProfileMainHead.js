import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditProfileModal from "../EditProfileModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VotingModal from "./Voting/VotingModal";

export default function ProfileMainHead({
  isEditable,
  name,
  bio,
  sid,
  expanded,
  setExpanded,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedInfo, setChangedInfo] = useState({
    name: null,
    bio: null,
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openVotingModal, setOpenVotingModal] = useState(false);
  const isPortrait = useMediaQuery("(min-width: 900px)");

  return (
    <>
      {/* TODO: this accordion looks like shit. fix it*/}
      <Accordion sx={{ mt: 2 }} expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            sx={
              isPortrait
                ? { display: "flex", justifyContent: "space-between" }
                : {}
            }
          >
            {isEditing ? (
              <TextField
                id="sid"
                label="نام و نام خانوادگی"
                variant="standard"
                defaultValue={name}
                onChange={(e) =>
                  setChangedInfo((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                inputProps={{ style: { fontSize: 23 } }}
              />
            ) : (
              <Typography variant="h5">{name}</Typography>
            )}

            <Box>
              <Button
                variant="contained"
                size="small"
                sx={{ mx: 2, borderRadius: "30px" }}
                onClick={() => setOpenVotingModal(true)}
              >
                ثبت رای ترین
              </Button>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {isEditing ? (
            <TextField
              sx={{ my: 2, width: "100%" }}
              id="outlined-multiline-static"
              label="بیوگرافی"
              multiline
              rows={4}
              defaultValue={bio}
              inputProps={{ style: { fontSize: 14 } }}
              onChange={(e) =>
                setChangedInfo((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }))
              }
            />
          ) : (
            <Typography
              variant="body2"
              sx={{
                overflowY: "scroll",
                maxHeight: "100px",
                position: "relative",
              }}
            >
              {bio}
            </Typography>
          )}
          {isEditable && (
            <IconButton
              aria-label="delete"
              size="small"
              sx={{ borderRadius: 0, m: "auto" }}
              onClick={() => setIsEditing(!isEditing)}
            >
              <EditIcon />
              <Typography variant={"caption"}> ویرایش معرفی</Typography>
            </IconButton>
          )}

          {isEditing && (
            <Button
              variant="contained"
              size="small"
              color="error"
              onClick={() => setOpenEditModal(true)}
            >
              دخیره تغییرات
            </Button>
          )}
        </AccordionDetails>
      </Accordion>

      <EditProfileModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        changedValues={changedInfo}
      />
      <VotingModal
        open={openVotingModal}
        setOpen={setOpenVotingModal}
        sid={sid}
      />
    </>
  );
}
