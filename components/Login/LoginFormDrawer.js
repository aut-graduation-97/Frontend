import { Drawer, FormControl, Divider, Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";

import { useState } from "react";
import { useRouter } from "next/router";

import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import ForgotPasswordAccordion from "./ForgotPasswordAccordion";

export default function LoginFormDrawer({ show, setShow }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(false);
  const [formIsUntouched, setFromIsUntouched] = useState(true);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userNameIsValid, setUsernameIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const usernameChangeHandler = (e) => {
    setFromIsUntouched(false);
    setUsernameInput(e.target.value);
    if (e.target.value.length < 7) {
      setUsernameIsValid(false);
      setPasswordIsValid(false);
      return;
    }
    setUsernameIsValid(true);
  };

  const passwordChangeHandler = (e) => {
    setFromIsUntouched(false);
    setPasswordInput(e.target.value);
    if (e.target.value.length < 7) {
      setPasswordIsValid(false);
      return;
    }
    setPasswordIsValid(true);
  };

  const loginHandler = async () => {
    setLoading(true);

    await signIn("credentials", {
      email: usernameInput,
      password: passwordInput,
      redirect: false,
    });

    setLoading(false);
    router.push("/Timeline");
  };

  return (
    <>
      <Drawer anchor={"right"} open={show} onClose={() => setShow(false)}>
        <FormControl
          sx={{ mx: 5, py: 5, display: "flex", alignItems: "center" }}
        >
          <TextField
            id="outlined-basic"
            label="شماره دانشجویی"
            type="username"
            autoComplete="current-username"
            onChange={usernameChangeHandler}
            error={!userNameIsValid}
            sx={{ my: 4, width: "100%" }}
          />

          <TextField
            id="outlined-password-input"
            label="رمز عبور"
            type="password"
            autoComplete="current-password"
            onChange={passwordChangeHandler}
            error={!passwordIsValid}
            sx={{ mb: 4, width: "100%" }}
          />

          <LoadingButton
            disabled={!(passwordIsValid && userNameIsValid) || formIsUntouched}
            size="big"
            onClick={loginHandler}
            startIcon={<LoginIcon sx={{ mx: 1 }} />}
            loading={loading}
            loadingPosition="start"
            variant="contained"
            sx={{ my: 4, width: "70%" }}
          >
            ورود
          </LoadingButton>
          <Divider />

          <ForgotPasswordAccordion />

          <Button
            variant="text"
            sx={{ mt: 3 }}
            onClick={(e) => {
              console.log(session);
              console.log(status);
            }}
          >
            log session data button (for debugging)
          </Button>
        </FormControl>
      </Drawer>
    </>
  );
}
