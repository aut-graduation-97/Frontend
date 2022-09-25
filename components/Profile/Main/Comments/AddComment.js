import { Box, Grid, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { postComment } from "../../../../api/students-api";
import { toast } from "react-toastify";

export default function AddComment() {
  const [writingStarted, setWritingStarted] = useState(false);
  const commentRef = useRef();
  const router = useRouter();

  const { data, isSuccess, refetch, error, isFetching } = useQuery(
    ["add-comment"],
    () =>
      postComment({ text: commentRef.current.value }, router.query.studentId),
    {
      enabled: false,
    }
  );

  if (isSuccess) toast.success("نظر شما با موفقیت ثبت شد");
  if (error) toast.error(error.message);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10}>
        <TextField
          inputRef={commentRef}
          sx={{ width: "100%" }}
          multiline
          rows={2}
          id="filled-multiline-static"
          label="نظر خود را بنویسید"
          variant="filled"
          inputProps={{ style: { fontSize: 14 } }}
          onChange={(e) => setWritingStarted(true)}
        />
      </Grid>
      <Grid item xs={2}>
        <LoadingButton
          sx={{ mr: 3 }}
          loading={isFetching}
          variant="contained"
          disabled={!writingStarted}
          onClick={() => refetch()}
        >
          ثبت نظر
        </LoadingButton>
        {/* TODO: add recaptcha*/}
      </Grid>
    </Grid>
  );
}
