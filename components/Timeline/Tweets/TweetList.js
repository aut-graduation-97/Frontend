import Box from '@mui/material/Box';


import TweetItem from './TweetItem';
export default function TweetList() {
  return (
    <Box sx={{my:5, ml:2}}>
      <TweetItem />
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </Box>
  );
}
