import { useMediaQuery, Grid, Box } from '@mui/material';

import NewTweetModal from '../components/Timeline/NewTweet/NewTweetModal';
import AppSidebar from '../components/SharedComponents/UI/AppSidebar';
import TweetList from '../components/SharedComponents/Tweets/TweetList';
import AppToolbar from '../components/SharedComponents/UI/AppToolbar';
import HeaderImage from '../components/SharedComponents/UI/HeaderImage';

export default function Timeline() {
  const tabletOrLower = useMediaQuery('(min-width:900px)');

  return tabletOrLower ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: '-60px' }}>
          <AppSidebar />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Box sx={{ overflowY: 'scroll', height: '75vh' }}>
            <TweetList />
            <NewTweetModal />
          </Box>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <TweetList />
      <NewTweetModal shift={true} />
      <AppToolbar />
    </>
  );
}
