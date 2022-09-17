import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PasswordIcon from '@mui/icons-material/Password';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import LoginIcon from '@mui/icons-material/Login';
import { FormHelperText } from '@mui/material';
import { useState } from 'react';

export default function LoginForm() {
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
    console.log(usernameInput, passwordInput);
  };
  return (
    <div style={{ paddingTop: '4rem' }}>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="شماره دانشجویی"
          type="username"
          autoComplete="current-username"
          onChange={usernameChangeHandler}
          error={!userNameIsValid}
        />

        <TextField
          id="outlined-password-input"
          label="رمز عبور"
          type="password"
          autoComplete="current-password"
          onChange={passwordChangeHandler}
          error={!passwordIsValid}
        />

        <LoadingButton
          disabled={!(passwordIsValid && userNameIsValid) || formIsUntouched}
          size="big"
          onClick={loginHandler}
          startIcon={<LoginIcon sx={{ mx: 1 }} />}
          loading={loading}
          loadingPosition="start"
          variant="contained"
        >
          ورود
        </LoadingButton>
      </FormControl>
    </div>
  );
}
