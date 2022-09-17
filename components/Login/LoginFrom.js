import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formIsUntouched, setFromIsUntouched] = useState(true);

  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

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

  const loginHandler = () => {
    setLoading(true);
    // TODO: login and redirect user
    console.log(usernameInput, passwordInput);
  };

  const guestLoginHandler = () => {};
  return (
    <FormControl sx={{ m: 5 }}>
      <TextField
        id="outlined-basic"
        label="شماره دانشجویی"
        type="username"
        autoComplete="current-username"
        onChange={usernameChangeHandler}
        error={!userNameIsValid}
        sx={{ my: 4 }}
      />

      <TextField
        id="outlined-password-input"
        label="رمز عبور"
        type="password"
        autoComplete="current-password"
        onChange={passwordChangeHandler}
        error={!passwordIsValid}
        sx={{ mb: 4 }}
      />

      <LoadingButton
        disabled={!(passwordIsValid && userNameIsValid) || formIsUntouched}
        size="big"
        onClick={loginHandler}
        startIcon={<LoginIcon sx={{ mx: 1 }} />}
        loading={loading}
        loadingPosition="start"
        variant="contained"
        sx={{ my: 4 }}
      >
        ورود
      </LoadingButton>
      <Divider />
      {/* TODO: change with actual link */}
      <Button variant="text" sx={{ mt: 3 }} onClick={(e)=> router.push("/")}>
        ورود به عنوان مهمان
      </Button>
    </FormControl>
  );
}
