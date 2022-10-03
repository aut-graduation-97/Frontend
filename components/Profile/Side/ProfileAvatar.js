import Avatar from "../../SharedComponents/Elements/Avatar";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import defaultImage from "../../../public/profile-picture.jpg";
import { PhotoCamera } from "@mui/icons-material";
import ChangeProfileModal from "./ChangeProfileModal";

export default function ProfileAvatar({ src, size }) {
  const [isHovered, setIsHovered] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
      >
        {/*TODO: add transition */}

        <Box
          sx={{ ...styles.wrapper, width: size, height: size }}
          style={{ border: "solid 5px #533483" }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{
              width: "100%",
              mt: 4.5,
              display: isHovered ? "block" : "none",
              transition: "all 0.3s ease-in-out",
              transform: isHovered ? "translateY(0)" : "translateY(-130%)",
            }}
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={selectImageHandler}
            />
            <PhotoCamera sx={styles.cameraIcon} />
          </IconButton>

          <Image
            src={"https://i.pravatar.cc/300"}
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </Box>
      </Box>
    </>
  );
}

const styles = {
  wrapper: {
    borderRadius: "50%",
    overflow: "hidden",
    margin: "auto",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  cameraIcon: { fontSize: "50px", my: "auto", verticalAlign: "middle" },
};
