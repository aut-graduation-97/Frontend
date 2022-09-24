import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ProgressBar from "../../Timeline/NewTweet/ProgressBar";
import SendTweetButton from "../../Timeline/NewTweet/SendTweetButton";
import { PhotoCamera } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { useQuery } from "@tanstack/react-query";
import { updateContact } from "../../../api/students-api";
import { toast } from "react-toastify";

export default function EditContactTableModal({
  open,
  changedContact,
  setOpen,
}) {
  const toPut = {};
  Object.keys(changedContact).forEach((key) => {
    if (changedContact[key] !== null) {
      toPut[key] = changedContact[key];
    }
  });

  const { data, error, isFetching, refetch } = useQuery(
    ["update-contact"],
    () => updateContact(JSON.stringify(toPut)),
    { enabled: false }
  );

  if (error) toast.error(error.message);

  // TODO: put this modal information in a table
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

            <Box sx={{ m: "auto" }}>{JSON.stringify(toPut)}</Box>

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
