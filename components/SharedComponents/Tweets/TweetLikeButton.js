import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSession} from "next-auth/react";
import {toast} from "react-toastify";

export default function ({ likesCount }) {
  const [liked, setLiked] = useState(false);
  // FIXME: not sure if this causes bug. technically should not but react is kinda shit so ...
  const [count, setCount] = useState(likesCount);
  const {status} = useSession();




  const likeHandler = () => {

    if ( status !== 'authenticated') {
      toast.error( 'برای لایک کردن باید وارد شوید!' );
      return;
    }
    // send to api

    // update state
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <IconButton color="error" onClick={likeHandler} sx={{position: 'relative', right:'87%'}}>
      <p style={{ fontSize: '12px', paddingLeft: '.3rem' }}>{count}</p>
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
