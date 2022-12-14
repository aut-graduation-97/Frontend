import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Router from "next/router";
import Avatar from "../Elements/Avatar";
import { signOut, useSession } from "next-auth/react";
import { deActiveToken } from "../../../api/auth-api";
import { toast } from "react-toastify";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

/**
 *
 * @param extraButtons {JSX.Element} extra buttons to be added to the sidebar
 * @param selected {string} string to show which button is selected
 * @returns {JSX.Element} a sidebar component
 */
export default function AppSidebar({ extraButtons, selected }) {
  const { data, status } = useSession();

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
    <Box sx={{ pl: 1, width: "100%" }}>
      {auth && (
        <Box sx={{ pb: 3 }}>
          <Avatar size="128px" src={data.user.avatar} />
        </Box>
      )}

      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ mt: auth ? 0 : 10 }}
      >
        <ListItemButton
          selected={selected === "TIMELINE"}
          sx={{ py: 1 }}
          onClick={(event) => Router.push("/Timeline")}
        >
          <ListItemIcon>
            <HomeIcon fontSize="large" color={"secondary"} />
          </ListItemIcon>
          <Typography variant="h6">تایم لاین</Typography>
        </ListItemButton>

        {auth && (
          <ListItemButton
            selected={selected === "PROFILE"}
            sx={{ py: 1 }}
            onClick={(event) =>
              Router.push(`/Students/${data.user.student_id}`)
            }
          >
            <ListItemIcon>
              <AccountCircleIcon fontSize="large" color={"secondary"} />
            </ListItemIcon>
            <Typography variant="h6"> پروفایل</Typography>
          </ListItemButton>
        )}

        <ListItemButton
          selected={selected === "MOSTS"}
          sx={{ py: 1 }}
          onClick={(event) => Router.push("/Mosts")}
        >
          <ListItemIcon>
            <GavelIcon fontSize="large" color={"secondary"} />
          </ListItemIcon>
          <Typography variant="h6">ترین ها</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === "GALLERY"}
          sx={{ py: 1 }}
          onClick={(event) => Router.push("/Gallery")}
        >
          <ListItemIcon>
            <CollectionsIcon fontSize="large" color={"secondary"} />
          </ListItemIcon>
          <Typography variant="h6"> گالری</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === "STUDENTS"}
          sx={{ py: 1 }}
          onClick={(event) => Router.push("/Students")}
        >
          <ListItemIcon>
            <PeopleIcon fontSize="large" color={"secondary"} />
          </ListItemIcon>
          <Typography variant="h6"> دانشجویان</Typography>
        </ListItemButton>

        <Divider />

        {isAdmin && (
          <>
            <ListItemButton
              selected={selected === "ADMIN"}
              sx={{ py: 1 }}
              onClick={(event) => Router.push("/AdminPanel")}
            >
              <ListItemIcon>
                <AdminPanelSettingsIcon fontSize="large" color={"error"} />
              </ListItemIcon>
              <Typography color={"error"} variant="h6">
                Admin Panel
              </Typography>
            </ListItemButton>
          </>
        )}

        {auth ? (
          <ListItemButton sx={{ py: 1 }} onClick={logoutHandler}>
            <ListItemIcon>
              <PowerSettingsNewIcon color={"error"} />
            </ListItemIcon>
            <Typography variant="h6"> خروج</Typography>
          </ListItemButton>
        ) : (
          <ListItemButton
            sx={{ py: 1 }}
            onClick={(event) => Router.push("/Login")}
          >
            <ListItemIcon>
              <LoginIcon color={"error"} />
            </ListItemIcon>
            <Typography variant="h6"> ورود</Typography>
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}
