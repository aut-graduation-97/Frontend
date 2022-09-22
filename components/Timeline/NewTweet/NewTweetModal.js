import {
  Typography,
  Box,
  Modal,
  Paper,
  TextField,
  IconButton,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";

import NewTweetButton from "./NewTweetButton";
import ProgressBar from "./ProgressBar";
import SendTweetButton from "./SendTweetButton";

export default function NewTweetModal({ shift }) {
  // TODO: change according to backend
  const tweetLengthLimit = 10;
  const [show, setShow] = useState(false);
  const [lengthIsValid, setLengthIsValid] = useState(true);
  const [tweetContent, setTweetContent] = useState("");
  const [helperText, setHelperText] = useState("");

  const inputChangeHandler = (e) => {
    const text = e.target.value;
    setTweetContent(text);

    if (text.length > tweetLengthLimit) {
      setHelperText(`تعداد کاراکترها باید از ${tweetLengthLimit} کم تر باشه`);
      setLengthIsValid(false);
      return;
    }
    if (text.length === 0) {
      setHelperText("توییت خالی است");
      setLengthIsValid(false);
      return;
    }
  };

  const inputBlurHandler = (e) => {
    if (e.target.value.length === 0) {
      setHelperText("توییت خالی است");
      setLengthIsValid(false);
    }
  };

  const openModalHandler = () => {
    setShow(true);
  };
  const closeModalHandler = () => {
    setShow(false);
    setLengthIsValid(true);
    setTweetContent("");
    setHelperText("");
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 2,
  };

  return (
    <>
      {!show && <NewTweetButton shift={shift} onClick={openModalHandler} />}
      <Modal open={show} onClose={closeModalHandler}>
        <Box style={style}>
          <Paper
            rounded={3}
            sx={{ display: "flex", flexDirection: "column", px: 4, py: 6 }}
          >
            <Typography variant="h6" component="h4" sx={{ mb: 4 }}>
              اضافه کردن توییت جدید
            </Typography>
            {/* FIXME: override TextField label css to move label to right  */}
            <TextField
              onBlur={inputBlurHandler}
              onChange={inputChangeHandler}
              error={lengthIsValid ? false : true}
              id="filled-multiline-static"
              label={lengthIsValid ? "توییت" : helperText}
              multiline
              rows={4}
              variant="filled"
              sx={{ mb: 2 }}
            />

            {tweetContent.length > 0 && (
              <ProgressBar
                progress={(tweetContent.length / tweetLengthLimit) * 100}
              />
            )}

            <SendTweetButton tweetContent={tweetContent} />
          </Paper>
        </Box>
      </Modal>
    </>
  );
}
