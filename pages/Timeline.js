import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';

import Sidebar from '../components/Timeline/Sidebar/Sidebar';
import TweetList from '../components/Timeline/Tweets/TweetList';

export default function Timeline() {
  return (
    <Grid container spacing={2} >
      <Grid item xs={3} >
        <Sidebar />
      </Grid>

      <Grid item xs={9} sx={{overflowY: 'scroll',
    height: '100vh' }}>
        <TweetList />
      </Grid>
    </Grid>
  );
}
