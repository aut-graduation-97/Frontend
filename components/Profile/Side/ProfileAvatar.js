import Avatar from "../../SharedComponents/Elements/Avatar";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import defaultImage from "../../../public/profile-picture.jpg";
import { PhotoCamera } from "@mui/icons-material";
import ChangeProfileModal from "./ChangeProfileModal";

export default function ProfileAvatar({ src, size }) {
  const [isHovered, setIsHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImageHandler = (e) => {
    setSelectedImage(e.target.files[0]);
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
        {isHovered ? (
          <Box
            sx={{
              borderRadius: "50%",
              overflow: "hidden",
              width: size,
              height: size,
              margin: "auto",
              backgroundColor: "rgba(0,0,0,0.55)",
            }}
            style={{ border: "solid 5px #533483" }}
          >
            {isHovered ? (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{
                  width: "100%",
                  mt: 4.5,
                }}
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={selectImageHandler}
                />
                <PhotoCamera
                  sx={{ fontSize: "50px", my: "auto", verticalAlign: "middle" }}
                />
              </IconButton>
            ) : (
              <Image
                src={"https://i.pravatar.cc/300"}
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full"
              />
            )}
          </Box>
        ) : (
          <Avatar size={size} src={src} />
        )}
      </Box>
    </>
  );
}
