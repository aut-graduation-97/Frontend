import Grid from "@mui/material/Grid";

import ProfileMain from "../../components/Profile/Main/ProfileMain";
import Avatar from "../../components/SharedComponents/Elements/Avatar";
import ContactTable from "../../components/Profile/ContactTable";
import HeaderImage from "../../components/SharedComponents/UI/HeaderImage";

export default function Profile() {
  return (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ mt: "-60px" }}>
          <Avatar size="150px" />
          <ContactTable />
        </Grid>

        <Grid item lg={9} md={9} sm={12} xs={12}>
          <ProfileMain />
        </Grid>
      </Grid>
    </>
  );
}
