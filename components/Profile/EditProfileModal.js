import { Box, Divider, Modal, Paper, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useQuery } from "@tanstack/react-query";
import { updateContact, updatePersonalInfo } from "../../api/students-api";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function EditProfileModal({ open, toPut, setOpen }) {
  const session = useSession();

  const { data, error, isFetching, refetch, isSuccess } = useQuery(
    ["update-contact"],
    () => updatePersonalInfo(toPut, session.data.user.student_id),
    { enabled: false }
  );

  if (error) toast.error(error.message);

  if (isSuccess) {
    toast.success("اطلاعات با موفقیت به روز شد");
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"modal"}>
          <Paper
            rounded={3}
            sx={{ display: "flex", flexDirection: "column", px: 4, py: 6 }}
          >
            <Typography variant="h6" component="h4" sx={{ mb: 4 }}>
              آیا می خواهید اطلااعات زیر را ویرایش کنید ؟
            </Typography>

            <Box sx={{ m: "auto", width: "80%" }}>
              {Object.keys(toPut).map((key) => (
                <>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ direction: "ltr", mt: 3 }}
                  >
                    {key}:
                  </Typography>
                  <Typography variant="body1" component="p">
                    {toPut[key]}
                  </Typography>
                  <Divider />
                </>
              ))}
            </Box>

            <LoadingButton
              loading={isFetching}
              variant="contained"
              onClick={() => refetch()}
              sx={{ m: "auto", mt: 4 }}
            >
              بروزرسانی
            </LoadingButton>
          </Paper>
        </Box>
      </Modal>
    </>
  );
}
