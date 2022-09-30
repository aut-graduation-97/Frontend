import Grid from "@mui/material/Grid";

import ProfileMain from "../../components/Profile/Main/ProfileMain";
import Avatar from "../../components/SharedComponents/Elements/Avatar";
import ContactTable from "../../components/Profile/Side/ContactTable";
import HeaderImage from "../../components/SharedComponents/Elements/HeaderImage";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import AppToolbar from "../../components/SharedComponents/UI/AppToolbar";
import { useMediaQuery } from "@mui/material";
import Profile from "../../components/Profile/Profile";

export default function ProfilePage() {
  const session = useSession();
  const router = useRouter();
  const wideScreen = useMediaQuery("(min-width:900px)");
  let isMyProfile = false;
  if (session.status === "authenticated") {
    isMyProfile =
      router.query.studentId === session.data.user.student_id.toString();
  }

  return (
    <>
      {!wideScreen && <AppToolbar />}
      <HeaderImage />
      <Profile isMyProfile={isMyProfile} sid={router.query.studentId} />
    </>
  );
}
