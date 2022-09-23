import { Grid, useMediaQuery } from "@mui/material";

import HeaderImage from "../components/SharedComponents/UI/HeaderImage";
import AppToolbar from "../components/SharedComponents/UI/AppToolbar";
import AppSidebar from "../components/SharedComponents/UI/AppSidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function MyProfile() {
  const router = useRouter();
  const session = useSession();
  const tabletOrLower = useMediaQuery("(min-width:900px)");
  console.log("router", router);

  if (session.status === "unauthenticated") router.push("/Err/unAuthorized");

  return tabletOrLower ? (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: "-60px" }}>
          <AppSidebar selected="PROFILE" />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <div> User tweets here with option to remove them.</div>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      {/* FIXME: where to add extra buttons for AppToolbar?*/}
      <AppToolbar />
      <div> User tweets here with option to remove them.</div>
    </>
  );
}
