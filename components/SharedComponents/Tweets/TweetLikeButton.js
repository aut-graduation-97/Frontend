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

  const { error: likeError, refetch: fetchLike } = useQuery({
    queryKey: ["like-tweet"],
    queryFn: () => likeTweet(tweetId, liked),
    enabled: false,
  });

  const { error: dislikeError, refetch: fetchDislike } = useQuery({
    queryKey: ["dislike-tweet"],
    queryFn: () => likeTweet(tweetId, liked),
    enabled: false,
  });

  const likeHandler = async () => {
    if (status !== "authenticated") {
      toast.error("برای لایک کردن باید وارد شوید!");
      return;
    }

    // update state
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1));

    liked ? fetchDislike() : fetchLike();
  };

  // FIXME: Infinite loop
  // if useQuery makes an error, we update the state in this if block
  // and then the state changes and the if block runs again and again
  // somehow the errors must be null again after we update the state
  if (likeError || dislikeError) {
    toast.error("خطایی رخ داده است!");

    setLiked(!liked);
    setCount((prev) => (liked ? prev + 1 : prev - 1));
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
