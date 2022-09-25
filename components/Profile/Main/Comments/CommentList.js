import Box from "@mui/material/Box";
import TweetItem from "../../../SharedComponents/Tweets/TweetItem";
import CommentItem from "./CommentItem";

export default function CommentList() {
  return (
    <Box sx={{ my: 3 }}>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </Box>
  );
}
