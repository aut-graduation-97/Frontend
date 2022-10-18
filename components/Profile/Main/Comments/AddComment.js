import { Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect, useRef, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { postComment } from "../../../../api/students-api";
import { toast } from "react-toastify";

function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}

export default function AddComment({ sid }) {
  const [comment, setComment] = useState("");
  const [captcha, setCaptcha] = useState({ string: "", answer: 0 });
  const [captchaUsed, setCaptchaUsed] = useState(false);
  const enteredCaptcha = useRef();

  const { data, isSuccess, refetch, error, isFetching } = useQuery(
    ["add-comment"],
    () => postComment({ text: comment }, sid),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    const int1 = Math.floor(Math.random() * 10);
    const int2 = Math.floor(Math.random() * 10);
    const label = `${toFarsiNumber(int1)} + ${toFarsiNumber(int2)} = ?`;
    setCaptcha({ string: label, answer: int1 + int2 });
  }, [captchaUsed]);

  const submitHandler = (e) => {
    setCaptchaUsed(true);
    if (+enteredCaptcha.current.value !== captcha.answer) {
      toast.error("کد امنیتی اشتباه است");
      return;
    }
    refetch();
  };

  if (isSuccess) toast.success("نظر شما با موفقیت ثبت شد");
  if (error) toast.error(error.message);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={10}>
        <TextField
          sx={{ width: "100%", mt: 2 }}
          multiline
          rows={3}
          id="filled-multiline-static"
          label="نظر خود را بنویسید"
          variant="filled"
          inputProps={{ style: { fontSize: 14 } }}
          onChange={(e) => setComment(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <LoadingButton
          sx={{ mr: 3, my: 2, width: 100 }}
          loading={isFetching}
          variant="contained"
          disabled={comment === ""}
          onClick={submitHandler}
        >
          ثبت نظر
        </LoadingButton>
        <TextField
          inputRef={enteredCaptcha}
          sx={{ width: 100, mr: 3, direction: "ltr" }}
          inputProps={{ style: { fontSize: 14 } }}
          id="captcha"
          label={captcha.string}
          variant="standard"
        />

        {/* TODO: add recaptcha*/}
      </Grid>
    </Grid>
  );
}
