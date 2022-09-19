import { Box, Typography, Grid, Button, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

export default function ProfileHead() {
  const router = useRouter();
  const phone = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Box
        style={{
          background: 'linear-gradient(to bottom, #3d5dd1 60%, white 40%)',
        }}
        sx={{ height: '30vh' }}
      >
        <Grid container sx={{ pt: '10vh' }}>
          <Grid item lg={3} md={3} sm={4}>
            <Avatar size="150px" />
          </Grid>

          <Grid item lg={9} md={9} sm={7}>
          
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
