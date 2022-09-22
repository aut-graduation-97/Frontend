import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { likeTweet } from "../../../api/tweet-api";

export default function TweetLikeButton({
  likesCount,
  tweetId,
  isLiked = false,
}) {
  const [liked, setLiked] = useState(isLiked);

  const [count, setCount] = useState(likesCount);
  const { status } = useSession();

  const {
    data: likeData,
    error: likeError,
    refetch: fetchLike,
  } = useQuery({
    queryKey: ["like-tweet"],
    queryFn: () => likeTweet(tweetId, liked),
    enabled: false,
  });

  const {
    data: dislikeData,
    error: dislikeError,
    refetch: fetchDislike,
  } = useQuery({
    queryKey: ["dislike-tweet"],
    queryFn: () => likeTweet(tweetId, liked),
    enabled: false,
  });
  console.log(likeError);
  const likeHandler = async () => {
    // update state
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);

    if (status !== "authenticated") {
      toast.error("برای لایک کردن باید وارد شوید!");
      return;
    }

    liked ? fetchDislike() : fetchLike();
  };

  if (likeError || dislikeError) {
    toast.error("خطایی رخ داده است!");
    if (process.enc.NODE_ENV === "development") console.log(likeError);
    setLiked(!liked);
    setCount(liked ? count + 1 : count - 1);
  }
  // ONLINE
  // toast.dark(likeData.message + "for dev");
  // toast.dark(dislikeData.message + "for dev");
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
