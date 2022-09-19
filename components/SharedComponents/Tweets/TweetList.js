import Box from '@mui/material/Box';

import TweetItem from './TweetItem';
export default function TweetList() {
  // TODO: fetch tweets from database.
  // TODO: implement fetch more on scroll / show more on scroll

  return (
    <Box sx={{ my: 5, ml: 2 }}>
      <TweetItem />
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </Box>
  );
}
