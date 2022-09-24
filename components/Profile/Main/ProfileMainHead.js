import {
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

export default function ProfileMainHead({ isEditable, name, bio }) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedInfo, setChangedInfo] = useState({
    name: null,
    bio: null,
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const isPortrait = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <EditProfileModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        changedValues={changedInfo}
      />
      <Box
        sx={
          isPortrait ? { display: "flex", justifyContent: "space-between" } : {}
        }
      >
        {isEditing ? (
          <TextField
            sx={{ mt: 2 }}
            id="standard-basic"
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
          <Typography variant="h5" sx={{ my: 2 }}>
            {name}
          </Typography>
        )}

        <Box>
          <Button
            variant="contained"
            size="small"
            sx={{ mx: 2, my: 2, borderRadius: "30px" }}
            onClick={() => router.push("/")}
          >
            ثبت رای ترین
          </Button>
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
        </Box>
      </Box>

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
          sx={{ overflowY: "scroll", maxHeight: "100px", position: "relative" }}
        >
          {bio}
        </Typography>
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
    </>
  );
}
