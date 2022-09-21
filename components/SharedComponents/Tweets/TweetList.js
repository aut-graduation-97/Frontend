import Box from '@mui/material/Box';

import TweetItem from './TweetItem';
export default function TweetList(tmp) {
  // TODO: fetch tweets from database.
  // TODO: implement fetch more on scroll / show more on scroll

  return (
    <Box sx={{ my: 3 }}>

      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
    </Box>
  );
}
