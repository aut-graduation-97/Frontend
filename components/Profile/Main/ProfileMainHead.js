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
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function ProfileMainHead({
  isEditable,
  name,
  bio,
  sid,
  expanded,
  setExpanded,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedInfo, setChangedInfo] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openVotingModal, setOpenVotingModal] = useState(false);
  const isPortrait = useMediaQuery("(min-width: 900px)");
  const session = useSession();

  const openVotingModalHandler = () => {
    if (session.status !== "authenticated") {
      toast.error("فقط اعضای سایت می توانند رای دهند");
      return;
    }
    setOpenVotingModal(true);
  };

  const submitHandler = (e) => {
    if (Object.keys(changedInfo).length === 0) {
      toast.warn("هیچ فیلدی تغییر نکرده است");
      return;
    }
    setOpenEditModal(true);
  };

  return (
    <>
      <Accordion sx={{ mt: 2 }} expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            sx={
              isPortrait && { display: "flex", justifyContent: "space-between" }
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
                onClick={openVotingModalHandler}
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
              id="bio"
              variant="filled"
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
            <Typography variant="body2" sx={styles.bio}>
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
              onClick={submitHandler}
              sx={{ mr: 2 }}
            >
              بروزرسانی تغییرات
            </Button>
          )}
        </AccordionDetails>
      </Accordion>

      <EditProfileModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        toPut={changedInfo}
      />
      <VotingModal
        open={openVotingModal}
        setOpen={setOpenVotingModal}
        sid={sid}
      />
    </>
  );
}

const styles = {
  bio: {
    overflowY: "scroll",
    maxHeight: "100px",
    position: "relative",
  },
};
