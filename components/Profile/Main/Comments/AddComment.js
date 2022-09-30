import { Box, Grid, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { postComment } from "../../../../api/students-api";
import { toast } from "react-toastify";

export default function AddComment({ sid }) {
  const [comment, setComment] = useState("");

  const { data, isSuccess, refetch, error, isFetching } = useQuery(
    ["add-comment"],
    () => postComment({ text: commentRef.current.value }, sid),
    {
      enabled: false,
    }
  );

  if (isSuccess) toast.success("نظر شما با موفقیت ثبت شد");
  if (error) toast.error(error.message);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={10}>
        <TextField
          sx={{ width: "100%" }}
          multiline
          rows={2}
          id="filled-multiline-static"
          label="نظر خود را بنویسید"
          variant="filled"
          inputProps={{ style: { fontSize: 14 } }}
          onChange={(e) => setComment(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <LoadingButton
          sx={{ mr: 3, mt: 2 }}
          loading={isFetching}
          variant="contained"
          disabled={comment === ""}
          onClick={() => refetch()}
        >
          ثبت نظر
        </LoadingButton>
        {/* TODO: add recaptcha*/}
      </Grid>
    </Grid>
  );
}
