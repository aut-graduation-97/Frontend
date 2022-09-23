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
import { PhotoCamera } from "@mui/icons-material";

export default function NewTweetModal({ shift }) {
  // TODO: change according to backend
  const tweetLengthLimit = 10;
  const [show, setShow] = useState(false);
  const [lengthIsValid, setLengthIsValid] = useState(true);
  const [tweetText, setTweetText] = useState("");
  const [tweetImages, setTweetImages] = useState([]);
  const [helperText, setHelperText] = useState("");

  const inputChangeHandler = (e) => {
    const text = e.target.value;
    setTweetText(text);

    if (text.length > tweetLengthLimit) {
      setHelperText(`تعداد کاراکترها باید از ${tweetLengthLimit} کم تر باشه`);
      setLengthIsValid(false);
      return;
    }
    if (text.length === 0) {
      setHelperText("توییت خالی است");
      setLengthIsValid(false);
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
    setTweetText("");
    setHelperText("");
  };
  const selectFileHandler = (e) => {
    setTweetImages(Array.from(e.target.files));
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

            <TextField
              onBlur={inputBlurHandler}
              onChange={inputChangeHandler}
              error={!lengthIsValid}
              id="filled-multiline-static"
              label={lengthIsValid ? "توییت" : helperText}
              multiline
              rows={4}
              variant="filled"
              sx={{ mb: 2 }}
            />

            {tweetText.length > 0 && (
              <ProgressBar
                progress={(tweetText.length / tweetLengthLimit) * 100}
              />
            )}

            <Box sx={{ m: "auto" }}>
              <SendTweetButton
                tweetText={tweetText}
                tweetImages={tweetImages}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ mx: 3 }}
              >
                {tweetImages ? (
                  <Typography variant="caption" component="p">
                    {tweetImages.length} عکس انتخاب شده است
                  </Typography>
                ) : (
                  <Typography variant="caption" component="p">
                    افزودن عکس
                  </Typography>
                )}
                <input
                  accept="image/*"
                  multiple
                  hidden
                  type="file"
                  onChange={selectFileHandler}
                />

                <PhotoCamera />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      </Modal>
    </>
  );
}
