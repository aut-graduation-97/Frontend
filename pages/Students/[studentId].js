import Grid from "@mui/material/Grid";

import ProfileMain from "../../components/Profile/Main/ProfileMain";
import Avatar from "../../components/SharedComponents/Elements/Avatar";
import ContactTable from "../../components/Profile/Side/ContactTable";
import HeaderImage from "../../components/SharedComponents/UI/HeaderImage";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();
  const router = useRouter();
  let isMyProfile = false;

  if (session.status === "authenticated") {
    isMyProfile =
      router.query.studentId ===
      JSON.parse(localStorage.getItem("user")).student_id;
  }
  return (
    <>
      <HeaderImage />
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ mt: "-60px" }}>
          <Avatar size="150px" />
          <ContactTable isEditable={isMyProfile} />
        </Grid>

        <Grid item lg={9} md={9} sm={12} xs={12}>
          <ProfileMain isEditable={isMyProfile} />
        </Grid>
      </Grid>
    </>
  );
}
