import Box from '@mui/material/Box';

import TweetItem from './TweetItem';
import {useQuery} from "@tanstack/react-query";
import {getAllTweets} from "../../../api/tweet-api";
import TweetLikeButton from "./TweetLikeButton";
import tweetLikeButton from "./TweetLikeButton";
import TweetDeleteButton from "./TweetDeleteButton";


export default function TweetList(tmp) {

    const { isLoading, isError, data, error } = useQuery(['all-tweets'], getAllTweets)

    if (isLoading) console.log("loading");
    if (isError) console.log(error);
    if (data) console.log("data", data);

  // TODO: fetch tweets from database.
  // TODO: implement fetch more on scroll / show more on scroll

  return (
    <Box sx={{ my: 3 }}>
        <TweetItem tmp id={'--id-from-server--'}  >
            <TweetDeleteButton tweetId={'--id-from-sever--'} />
            <TweetLikeButton likesCount='326' />
        </TweetItem>


      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
    </Box>
  );
}
