import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import FormData from "form-data";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { postImage } from "../../../api/admin-api";
import { toast } from "react-toastify";

export default function AddImage() {
  const [galleryImages, setGalleryImages] = useState([]);
  let formData = new FormData();

  const { isSuccess, error, isFetching, refetch } = useQuery(
    ["send-image"],
    () => postImage(formData),
    {
      enabled: false,
    }
  );

  const sendImageHandler = (e) => {
    e.preventDefault();

    galleryImages.forEach((image) => {
      formData.append("images", image);
    });

    refetch();
  };

  if (error) toast.error(error.message);
  if (isSuccess) toast.success("عکس با موفقیت اضافه شد");

  const isSelected = galleryImages.length !== 0;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: ` ${isSelected ? "space-between" : "left"}`,
        }}
      >
        {isSelected && (
          <LoadingButton
            loadingPosition="center"
            size={"small"}
            color={"error"}
            loading={isFetching}
            variant="contained"
            onClick={sendImageHandler}
          >
            اضافه کردن تصویر
          </LoadingButton>
        )}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ borderRadius: 0, mx: 3 }}
        >
          {isSelected ? (
            <Typography variant="caption" component="p">
              {galleryImages.length} تصویر انتخاب شده است
            </Typography>
          ) : (
            <Typography variant="caption" component="p">
              افزودن تصویر جدید
            </Typography>
          )}
          <input
            accept="image/*"
            multiple
            hidden
            type="file"
            onChange={(e) => setGalleryImages(Array.from(e.target.files))}
          />

          <PhotoCamera fontSize={"large"} />
        </IconButton>
      </Box>
    </>
  );
}
