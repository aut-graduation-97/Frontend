import Avatar from "../../SharedComponents/Elements/Avatar";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

import { PhotoCamera } from "@mui/icons-material";
import ChangeProfileModal from "./ChangeProfileModal";
import EditIcon from "@mui/icons-material/Edit";

export default function ProfileAvatar({ src, size }) {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const isPortrait = useMediaQuery("(max-width:900px)");

  const selectImageHandler = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(e.target.files[0]);
    setOpenModal(true);
  };

  return (
    <>
      {selectedImage && (
        <ChangeProfileModal
          open={openModal}
          setOpen={setOpenModal}
          chosenImage={selectedImage}
        />
      )}
      <Box
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: size,
          height: size,
          ...styles.wrapper,
        }}
      >
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={selectImageHandler}
            />

            <PhotoCamera
              sx={{
                ...styles.cameraIcon,
                transform: isHovered ? "translateY(0)" : "translateY(-400%)",
              }}
            />
          </IconButton>

          <Box
            sx={{
              position: "relative",
              transform: "translateY(-100px)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image
              src={"https://i.pravatar.cc/300"}
              alt="avatar"
              width={150}
              height={150}
              className="rounded-full"
            />
          </Box>
        </Box>
      </Box>
      {isPortrait && (
        <IconButton
          size="small"
          color={"secondary"}
          sx={{ borderRadius: 0, mt: -20 }}
          onClick={(e) => setIsHovered(!isHovered)}
        >
          <EditIcon />
          <Typography variant={"caption"}> آواتار</Typography>
        </IconButton>
      )}
    </>
  );
}

const styles = {
  wrapper: {
    borderRadius: "50%",
    overflow: "hidden",
    margin: "auto",
    border: "7px solid #E94560 ",
  },
  cameraIcon: {
    fontSize: "50px",
    width: "100%",
    mt: 4.5,
    mr: 4.5,
    position: "relative",
    zIndex: 10,
    transition: "all 0.3s ease-in-out",
    boxShadow:
      "0px 0px 30px 100px rgba(0,0,0,0.80) , 0px 0px 20px 100px rgba(0,0,0,0.80) inset",
  },
};
