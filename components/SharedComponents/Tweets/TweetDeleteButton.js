import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function TweetDeleteButton() {
  const { status } = useSession();

  const deleteHandler = () => {
    if (status !== "authenticated") {
      toast.error("برای حذف باید وارد شوید!");
      return;
    }
    // send to api

    // update state
  };

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
