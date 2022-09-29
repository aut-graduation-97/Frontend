import { useMediaQuery, Grid, Box } from "@mui/material";

import NewTweetModal from "../components/Timeline/NewTweet/NewTweetModal";
import AppSidebar from "../components/SharedComponents/UI/AppSidebar";
import TweetList from "../components/SharedComponents/Tweets/TweetList";
import AppToolbar from "../components/SharedComponents/UI/AppToolbar";
import HeaderImage from "../components/SharedComponents/UI/HeaderImage";
import { useSession } from "next-auth/react";
import Cookies from "universal-cookie";

export default function TimelinePage() {
  const wideScreen = useMediaQuery("(min-width:900px)");

  const session = useSession();

  // Setting custom cookies
  // const cookies = new Cookies();
  // if (session.status === "authenticated") {
  //   cookies.set("authenthicated", "true", { path: "/" });
  //
  //   if (session.data.user.super_user)
  //     cookies.set("admin", "true", { path: "/" });
  //   else cookies.set("admin", "false", { path: "/" });
  // } else cookies.set("authenthicated", "false", { path: "/" });

  return wideScreen ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: "-60px" }}>
          <AppSidebar selected="TIMELINE" />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Box sx={{ overflowY: "scroll", height: "80vh" }}>
            <TweetList />
            <NewTweetModal />
          </Box>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <TweetList />
      <NewTweetModal shift={true} />
      <AppToolbar />
    </>
  );
}
