import Avatar from '../Elements/Avatar';
import TweetLikeButton from './TweetLikeButton';

import { Grid, Divider, Typography, Box, useMediaQuery } from '@mui/material';

const DUMMY_TEXT =
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ';
const DUMMY_TITLE1 = 'مهسا امینی';
const DUMMY_TITLE2 = ' سید حسام الدین هاتقی نسب';
const DUMMY_LIKES = 326;

export default function TweetItem({ tmp }) {

  const phone = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <Box sx={{ py: 0 }}>
          <Avatar size={phone ? '50px' : '80px'} />
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ pt: phone ? 1 : 3, pb: 2 }}
        >
          {tmp.tmp === '1' ? DUMMY_TITLE1 : DUMMY_TITLE2}
        </Typography>
        <Typography variant="p" component="p">
          {DUMMY_TEXT}
        </Typography>
        <TweetLikeButton likesCount={DUMMY_LIKES} />
        <Divider />
      </Grid>
    </Grid>
  );
}
