import Avatar from "../Elements/Avatar";

import {
  Box,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Box sx={styles.avatarWrapper}>
          <Avatar size={phone ? "60px" : "100px"} sx={{ m: "auto" }} />
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Typography variant="h6" component="h5" sx={styles.title}>
          {tmp === "1" ? DUMMY_TITLE1 : DUMMY_TITLE2}
        </Typography>
        <Typography variant="p" component="p" sx={styles.text}>
          {DUMMY_TEXT}
        </Typography>
        <Box sx={styles.imageList}>
          <ExpandableImage src="https://picsum.photos/1080" />
          <ExpandableImage src="https://picsum.photos/1080" />
        </Box>
        <Box sx={styles.buttonWrapper}>
          {isEditable && <TweetDeleteButton tweetId={"--id-from-sever--"} />}
          <TweetLikeButton likesCount={45} />
        </Box>

        <Divider />
      </Grid>
    </Grid>
  );
}

const styles = {
  avatarWrapper: {
    py: 1,
    mr: {
      xs: -3,
      sm: -3,
      md: -5,
    },
  },
  title: {
    mt: 3,
    pb: 1,
    fontWeight: "600",
    pr: {
      xs: 1,
      sm: 1,
      md: 0,
    },
  },
  text: {
    pl: {
      xs: 1,
      sm: 1,
      md: 4,
    },
    pr: {
      xs: 1,
      sm: 1,
      md: 0,
    },
  },
  imageList: {
    height: {
      xs: "auto",
      sm: 210,
    },
    pl: 3,
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
    justifyContent: "space-evenly",
    verticalAlign: "middle",
    my: "auto",
  },
  buttonWrapper: {
    ml: {
      xs: 4,
      sm: 4,
      md: 0,
    },
  },
};
