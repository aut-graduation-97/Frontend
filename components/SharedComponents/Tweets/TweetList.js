import Box from '@mui/material/Box';

import TweetItem from './TweetItem';
import {useQuery} from "@tanstack/react-query";
import {getAllTweets} from "../../../api/tweet-api";

export default function TweetList(tmp) {

    const { isLoading, isError, data, error } = useQuery(['all-tweets'], getAllTweets)

    if (isLoading) console.log("loading");
    if (isError) console.log(error);
    if (data) console.log("data", data);

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
