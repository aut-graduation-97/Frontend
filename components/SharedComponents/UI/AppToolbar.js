import { AppBar, Toolbar, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import Avatar from "../Elements/Avatar";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

/**
 * @returns {JSX.Element} an app toolbar component
 */
export default function AppToolbar() {
  const { status, data } = useSession();

  const auth = status === "authenticated";
  const isAdmin = auth && data.user.super_user;

  const logoutHandler = async (e) => {
    e.preventDefault();
    // ONLINE - uncomment
    // try{
    //   await deActiveToken();
    // }catch (e){
    //   toast.error("خطایی رخ داده است");
    // }

    // ONLINE - change address
    await signOut({ callbackUrl: "http://localhost:3000/Login" });
  };

  return (
    <>
      <AppBar position="fixed" color="primary" sx={styles.appbarTop}>
        <Toolbar sx={styles.toolbar}>
          {auth ? (
            <IconButton onClick={logoutHandler}>
              <PowerSettingsNewIcon color={"error"} />
            </IconButton>
          ) : (
            <IconButton onClick={(event) => Router.push("/Login")}>
              <LoginIcon color={"error"} />
            </IconButton>
          )}

          {isAdmin && (
            <IconButton
              sx={{ color: "error" }}
              onClick={(event) => Router.push("/AdminPanel")}
            >
              <AdminPanelSettingsIcon fontSize="small" color={"error"} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <AppBar position="fixed" color="primary" sx={styles.appbarBottom}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            sx={{ py: 1, color: "white" }}
            onClick={(event) => Router.push("/Mosts")}
          >
            <GavelIcon fontSize="large" color={"secondary"} />
          </IconButton>

          <IconButton
            sx={{ py: 1, color: "white" }}
            onClick={(event) => Router.push("/Gallery")}
          >
            <CollectionsIcon fontSize="large" color={"secondary"} />
          </IconButton>
          <IconButton
            selected
            sx={{ py: 1 }}
            onClick={(event) => Router.push("/Timeline")}
          >
            <HomeIcon color={"secondary"} fontSize="large" />
          </IconButton>
          <IconButton onClick={(event) => Router.push("/Students")}>
            <PeopleIcon fontSize="large" color={"secondary"} />
          </IconButton>

          {status === "authenticated" ? (
            <IconButton
              onClick={(event) =>
                Router.push(`/Students/${data.user.student_id}`)
              }
              sx={{ py: 1, color: "white" }}
            >
              <Avatar size="32px" src={data.user.avatar} />
            </IconButton>
          ) : (
            <IconButton
              onClick={(event) => Router.push(`/Login`)}
              sx={{ py: 1, color: "white" }}
            >
              <LoginIcon color={"error"} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "10px",
    height: "30px",
    px: 0.5,
  },
  appbarTop: { bottom: "auto", top: 0, zIndex: 1000 },
  appbarBottom: { top: "auto", bottom: 0, zIndex: 1000 },
};
