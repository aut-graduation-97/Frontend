import { Grid, useMediaQuery, Box } from "@mui/material";

import StudentsList from "../../components/Students/StudentsList";
import HeaderImage from "../../components/SharedComponents/Elements/HeaderImage";
import AppToolbar from "../../components/SharedComponents/UI/AppToolbar";
import AppSidebar from "../../components/SharedComponents/UI/AppSidebar";

export default function Students() {
  const wideScreen = useMediaQuery("(min-width:900px)");

  return wideScreen ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: "-60px" }}>
          <AppSidebar selected="STUDENTS" />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <Box
            sx={{ overflowY: "scroll", height: "80vh", overflowX: "hidden" }}
          >
            <StudentsList />
          </Box>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <AppToolbar />
      <StudentsList />
    </>
  );
}
