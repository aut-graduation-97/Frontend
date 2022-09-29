import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import formData from "form-data";
import { useQuery } from "@tanstack/react-query";
import { postTweet } from "../../../api/tweet-api";
import LoadingButton from "@mui/lab/LoadingButton";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function SendTweetButton({ disabled, tweetText, tweetImages }) {
  // For keeping modal component thinner, we can send the data to  backend from here. not a usual practice but it's
  // ok for now
  const session = useSession();
  let formData = new FormData();
  const { data, error, isFetching, refetch } = useQuery(
    ["sendTweet"],
    () => postTweet(formData),
    {
      enabled: false,
    }
  );

  const sendTweetHandler = (e) => {
    e.preventDefault();
    formData.append("text", tweetText);
    tweetImages.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("userId", session.data.user.user_id);

    refetch();
  };

  if (error) toast.error(error.message);

  return (
    <LoadingButton
      loading={isFetching}
      variant="contained"
      endIcon={<SendIcon sx={{ mx: 1 }} />}
      disabled={!!disabled}
      onClick={sendTweetHandler}
    >
      توییت کن
    </LoadingButton>
  );
}
