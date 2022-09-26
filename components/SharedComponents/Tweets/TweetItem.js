import Avatar from "../Elements/Avatar";

import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import TweetDeleteButton from "./TweetDeleteButton";
import TweetLikeButton from "./TweetLikeButton";
import ExpandableImage from "../Elements/ExpandableImage";

const DUMMY_TEXT =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجلبا استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ";
const DUMMY_TITLE1 = "مهسا امینی";
const DUMMY_TITLE2 = " سید حسام الدین هاتقی نسب";
const DUMMY_LIKES = 326;

/**
 *
 * @param children button for like and delete
 * @param tmp for dev
 * @returns {JSX.Element}
 * @constructor
 */
export default function TweetItem({ isEditable, tmp }) {
  const phone = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={0} sx={{ pl: 3 }}>
      {/*FIXME: this grid item causes a thin white line in appbar for some reason*/}
      <Grid item xs={2}>
        <Box sx={{ py: 1 }}>
          <Avatar size={phone ? "60px" : "100px"} sx={{ m: "auto" }} />
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Typography
          variant="h6"
          component="h5"
          sx={{ mt: phone ? 3 : 2, pb: 1, fontWeight: "600" }}
        >
          {tmp === "1" ? DUMMY_TITLE1 : DUMMY_TITLE2}
        </Typography>
        <Typography variant="p" component="p" sx={{ pl: 4 }}>
          {DUMMY_TEXT}
        </Typography>

        <ExpandableImage src="https://picsum.photos/3000" />
        {isEditable && <TweetDeleteButton tweetId={"--id-from-sever--"} />}
        <TweetLikeButton likesCount={45} />
        <Divider />
      </Grid>
    </Grid>
  );
}
