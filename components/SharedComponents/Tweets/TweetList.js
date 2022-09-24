import Box from "@mui/material/Box";

import TweetItem from "./TweetItem";
import TweetDeleteButton from "./TweetDeleteButton";
import TweetLikeButton from "./TweetLikeButton";

export default function TweetList({ tmp, isEditable }) {
  // const { isLoading, isError, data, error } = useQuery(
  //   ["all-tweets"],
  //   getAllTweets
  // );
  //
  // if (isLoading) console.log("loading");
  // if (isError) console.log(error);
  // if (data) console.log("data", data);

  // TODO: fetch tweets from database.
  // TODO: implement fetch more on scroll / show more on scroll

  return (
    <Box sx={{ my: 3 }}>
      <TweetItem tmp id={"--id-from-server--"}>
        {isEditable && <TweetDeleteButton tweetId={"--id-from-sever--"} />}
        <TweetLikeButton likesCount={45} />
      </TweetItem>

      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
      <TweetItem tmp={tmp} />
    </Box>
  );
}
