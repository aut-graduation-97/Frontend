import { Box, Button, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import LoginFormDrawer from '../components/Login/LoginFormDrawer';
import {useRouter} from "next/router";

export default function Login() {

  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
    const phone = useMediaQuery('(max-width:600px)');

  return (
    <>
      <LoginFormDrawer show={showDrawer} setShow={setShowDrawer} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: phone ? 'center' : 'space-between',
          flexDirection: phone ? 'column' : 'row',
          alignItems: 'center',
          height: '150vh',
          width: '80vw',
          m: 'auto',
          px: 5,
        }}
      >
        <Button
          sx={{ m: 4 }}
          variant="contained"
          onClick={() => setShowDrawer(true)}
        >
          ورود اعضا
        </Button>
        {/* TODO: change with actual link */}
        <Button variant="contained" onClick={(e) => router.push('/')}>
          ورود به عنوان مهمان
        </Button>
      </Box>
    </>
  );
}
