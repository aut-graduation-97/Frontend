import Box from '@mui/material/Box';
import Avatar from '../Sidebar/Avatar';
import  Typography  from '@mui/material/Typography';
import TweetLikeButton from './TweetLikeButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const DUMMY_TEXT = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که '
const DUMMY_TITLE = 'مهسا امینی'
const DUMMY_LIKES = 326

export default function TweetItem() {
  return (
    <Grid container spacing={2} sx={{mb:4}} >
      <Grid item xs={2} >
        <Box sx={{py: 0}}>
        <Avatar size='80px' />
        </Box>
    
      </Grid>

      <Grid item xs={10} >
        <Typography variant="h5" component="h5" sx={{pt:3, pb:2}}>
          {DUMMY_TITLE}
        </Typography>
        <Typography variant="p" component="p" >
          {DUMMY_TEXT}
        </Typography>
        <TweetLikeButton likesCount={DUMMY_LIKES}  />
        <Divider   />
        
      </Grid>
    </Grid>
  );
}
