import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { likeTweet } from "../../../api/tweet-api";

export default function TweetLikeButton({ likesCount, tweetId }) {
  const [liked, setLiked] = useState(false);

  const [count, setCount] = useState(likesCount);
  const { status } = useSession();

  const {
    data: likeData,
    error: likeError,
    refetch: fetchLike,
  } = useQuery(["like-tweet"], likeTweet(tweetId, true), { enabled: false });

  const {
    data: dislikeData,
    error: dislikeError,
    refetch: fetchDislike,
  } = useQuery(["like-tweet"], likeTweet(tweetId, false), { enabled: false });

  const likeHandler = async () => {
    if (status !== "authenticated") {
      toast.error("برای لایک کردن باید وارد شوید!");
      return;
    }

    // send to api
    if (liked) {
      await fetchLike();
      if (likeError) {
        toast.error("خطایی رخ داده است!");
        return;
      }
      toast.dark(likeData.message + "for dev");
    } else {
      await fetchDislike();
      if (dislikeError) {
        toast.error("خطایی رخ داده است!");
        return;
      }
      toast.dark(dislikeData.message + "for dev");
    }

    // update state
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <IconButton
      color="error"
      onClick={likeHandler}
      sx={{ position: "relative", right: "80%" }}
    >
      <p style={{ fontSize: "12px", paddingLeft: ".3rem" }}>{count}</p>
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
