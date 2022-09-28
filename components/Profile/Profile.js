import Grid from "@mui/material/Grid";
import Avatar from "../SharedComponents/Elements/Avatar";
import ContactTable from "./Side/ContactTable";
import ProfileMain from "./Main/ProfileMain";
import { useQuery } from "@tanstack/react-query";
import { getProfileInfo } from "../../api/students-api";
import { toast } from "react-toastify";
import CustomError from "../SharedComponents/Elements/CustomError";
import ProfileAvatar from "./Side/ProfileAvatar";

export default function Profile({ isMyProfile, sid }) {
  if (true) {
    return (
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ mt: "-60px" }}>
          {isMyProfile ? (
            <ProfileAvatar size={"150px"} />
          ) : (
            <Avatar size={"150px"} />
          )}
          <ContactTable isEditable={isMyProfile} />
        </Grid>

        <Grid item lg={9} md={9} sm={12} xs={12}>
          <ProfileMain isEditable={isMyProfile} />
        </Grid>
      </Grid>
    );
  }

  const { data, error, isLoading, refetch } = useQuery(
    ["profile"],
    () => getProfileInfo(sid),
    {
      enabled: true,
    }
  );

  if (isLoading) return <div>SPINNER</div>;

  if (error) {
    toast.error(error.message);
    return <CustomError />;
  }

  // TODO: after user updates his/her profile, the data should be updated, There are two possible approaches:
  // 1. useQuery with enabled: true, and refetch() after update
  // 2. refresh the entire page like a giga chad
  if (data) {
    const profileMainData = {
      name: data.user.name,
      bio: data.user.bio,
    };

    return (
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={12} xs={12} sx={{ mt: "-60px" }}>
          {/*<Avatar size="150px" src={data.user.avatar}/>*/}
          <Avatar size="150px" />
          <ContactTable
            data={data}
            isEditable={isMyProfile}
            updateInfo={refetch}
          />
        </Grid>

        <Grid item lg={9} md={9} sm={12} xs={12}>
          <ProfileMain
            data={profileMainData}
            isEditable={isMyProfile}
            updateInfo={refetch}
          />
        </Grid>
      </Grid>
    );
  }
}
