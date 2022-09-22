import { useMediaQuery, Grid, Box } from "@mui/material";

import NewTweetModal from "../components/Timeline/NewTweet/NewTweetModal";
import AppSidebar from "../components/SharedComponents/UI/AppSidebar";
import TweetList from "../components/SharedComponents/Tweets/TweetList";
import AppToolbar from "../components/SharedComponents/UI/AppToolbar";
import HeaderImage from "../components/SharedComponents/UI/HeaderImage";
import { useSession } from "next-auth/react";
import jwt_decode from "jwt-decode";
import { useQuery } from "@tanstack/react-query";
import { getAllTweets } from "../api/tweet-api";

export default function Timeline() {
  const session = useSession();
  if (session.status === "authenticated") {
    // for dev
    localStorage.setItem(
      "user",
      "{\n" +
        '  "student_id": "9731054",\n' +
        '  "super_user": true,\n' +
        '  "name": "arefeh kompani",\n' +
        '  "user_id": "6329ed5afb672824e63ab4a3",\n' +
        '  "avatar": null,\n' +
        '  "iat": 1663856309,\n' +
        '  "exp": 1664461109\n' +
        "}"
    );

    // ONLINE
    // localStorage.setItem("user", JSON.stringify(jwt_decode(session.data.token)));
  }
  const { data } = useQuery(["w"], getAllTweets);
  console.log(data);
  const tabletOrLower = useMediaQuery("(min-width:900px)");

  return tabletOrLower ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: "-60px" }}>
          <AppSidebar selected="TIMELINE" />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Box sx={{ overflowY: "scroll", height: "75vh" }}>
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
