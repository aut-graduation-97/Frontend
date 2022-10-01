import { Box, Modal, Paper, Typography } from "@mui/material";
import Image from "next/image";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { postProfilePicture } from "../../../api/students-api";
import { useSession } from "next-auth/react";

export default function ChangeProfileModal({ open, setOpen, chosenImage }) {
  const [formData, setFormData] = useState(new FormData());
  const session = useSession();

  const { isSuccess, error, isFetching, refetch } = useQuery(
    ["update-profile-image"],
    () => postProfilePicture(formData, session.data.user.student_id),
    {
      enabled: false,
    }
  );

  const uploadPPHandler = (e) => {
    e.preventDefault();
    formData.append("images", chosenImage);
    setFormData(formData);

    refetch();
  };

  const img = URL.createObjectURL(chosenImage);

  if (error) toast.error(error.message);

  if (isSuccess) {
    toast.success("اطلاعات با موفقیت به روز شد");
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={"modal"}>
        <Paper rounded={3} sx={styles.modalPaper}>
          <Typography variant={"h6"} sx={{ mb: 1 }}>
            این عکس را به عنوان عکس پروفایل خود انتخاب می کنید ؟
          </Typography>
          <Typography variant={"caption"} sx={{ mb: 4 }}>
            پیشنهاد میشود عکس کراپ شده با ابعاد مربع شکل باشد
          </Typography>

          {chosenImage && (
            <Box sx={{ mr: 18.5 }}>
              <Box
                sx={{
                  maxWidth: 200,
                  maxHeight: 200,
                }}
              >
                <Image
                  style={{ borderRadius: "50%" }}
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src={img}
                  alt="chosenImage"
                />
              </Box>
            </Box>
          )}

          <LoadingButton
            loading={isFetching}
            variant="contained"
            onClick={uploadPPHandler}
            sx={{ m: "auto", mt: 4 }}
          >
            بروزرسانی
          </LoadingButton>
        </Paper>
      </Box>
    </Modal>
  );
}

const styles = {
  modalPaper: { display: "flex", flexDirection: "column", px: 4, py: 6 },
};
