import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import NewTweetModal from '../components/Timeline/NewTweet/NewTweetModal';

import Sidebar from '../components/Timeline/Sidebar';
import TweetList from '../components/SharedComponents/Tweets/TweetList';
import { useMediaQuery } from '@mui/material';
import TimelineAppBar from '../components/SharedComponents/UI/TimelineAppBar';

export default function Timeline() {
  const tabletOrLower = useMediaQuery('(min-width:900px)');

  return tabletOrLower ? (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} sx={{ overflowY: 'scroll', height: '100vh' }}>
          <TweetList />
          <NewTweetModal />
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <TweetList />
      <NewTweetModal shift={true} />
      <TimelineAppBar />
    </>
  );
}
