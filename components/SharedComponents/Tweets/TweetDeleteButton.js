import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { deleteTweet, likeTweet } from "../../../api/tweet-api";
import LoadingProgress from "../UI/LoadingProgress";

export default function TweetDeleteButton({ tweetId }) {
  const { status } = useSession();

  const deleteHandler = () => {
    if (status !== "authenticated") {
      toast.error("برای حذف باید وارد شوید!");
      return;
    }

    refetch();
  };

  const { error, refetch, isSuccess, isFetching } = useQuery({
    queryKey: ["delete-tweet"],
    queryFn: () => deleteTweet(tweetId),
    enabled: false,
  });

  if (error) toast.error(error.message);
  if (isSuccess) toast.success("توییت با موفقیت حذف شد");
  if (isFetching) return <LoadingProgress />;

  return (
    <IconButton
      color="error"
      onClick={deleteHandler}
      sx={{ position: "relative", right: "80%" }}
    >
      <DeleteForeverIcon color="primary" />
    </IconButton>
  );
}
