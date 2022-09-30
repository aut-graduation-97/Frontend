import HeaderImage from "../components/SharedComponents/Elements/HeaderImage";
import AppToolbar from "../components/SharedComponents/UI/AppToolbar";
import AppSidebar from "../components/SharedComponents/UI/AppSidebar";
import MostsList from "../components/Mosts/MostsList";
import { Box, useMediaQuery, Grid } from "@mui/material";

export default function MostsPage() {
  const wideScreen = useMediaQuery("(min-width:900px)");

  return wideScreen ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: "-60px" }}>
          <AppSidebar selected="MOSTS" />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Box sx={{ overflowY: "scroll", height: "75vh" }}>
            <MostsList />
          </Box>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <MostsList />
      <AppToolbar />
    </>
  );
}
