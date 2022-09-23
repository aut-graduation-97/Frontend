import HeaderImage from "../components/SharedComponents/UI/HeaderImage";
import {Box, Grid, useMediaQuery} from "@mui/material";
import AppSidebar from "../components/SharedComponents/UI/AppSidebar";
import TweetList from "../components/SharedComponents/Tweets/TweetList";
import NewTweetModal from "../components/Timeline/NewTweet/NewTweetModal";
import AppToolbar from "../components/SharedComponents/UI/AppToolbar";
import AdminPanelAccordion from "../components/Admin/AdminPanelAccordion";


export default function AdminPanel() {

  const tabletOrLower = useMediaQuery("(min-width:900px)");

  return tabletOrLower ? (
      <>
        <HeaderImage/>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={3} xs={12} sx={{mt: "-60px"}}>
            <AppSidebar selected="ADMIN"/>
          </Grid>

          <Grid item lg={9} md={9} sm={9} xs={12}>
            <Box sx={{overflowY: "scroll", height: "75vh"}}>
              <AdminPanelAccordion/>
            </Box>
          </Grid>
        </Grid>
      </>
  ) : (
      <>
        <AdminPanelAccordion/>
        <AppToolbar/>
      </>
  );


}