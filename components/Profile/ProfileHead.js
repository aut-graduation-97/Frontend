import { Box, Typography, Grid, Button } from '@mui/material';
import { useRouter } from 'next/router';

import Avatar from '../SharedComponents/Elements/Avatar';
export default function ProfileHead() {
  const router = useRouter();
  return (
    <>
      <Box
        style={{
          background: 'linear-gradient(to bottom, #3d5dd1 60%, white 40%)',
        }}
        sx={{ height: '30vh' }}
      >
        <Grid container sx={{ pt: '10vh' }}>
          <Grid item xs={3}>
            <Avatar size="150px" />
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h5" sx={{ mt: 8, mb: 1 }}>
              محمد حسن آلبوغبیش عراقی
              <Button
                variant="contained"
                size="small"
                sx={{ mx: 4, borderRadius: '30px' }}
                onClick={() => router.push('/')}
              >
                مشاهده ترین
              </Button>
            </Typography>
            <Typography variant="body2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
