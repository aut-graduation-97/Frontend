import { AppBar, Toolbar, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import CollectionsIcon from "@mui/icons-material/Collections";
import PeopleIcon from "@mui/icons-material/People";
import Avatar from "../Elements/Avatar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

/**
 * @returns {JSX.Element} an app toolbar component
 */
export default function AppToolbar() {
  const router = useRouter();
  const { status, data } = useSession();

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: 0, bottom: "auto", height: "3vh" }}
      />
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton
            sx={{ py: 1, color: "white" }}
            onClick={(event) => router.push("/Mosts")}
          >
            <GavelIcon fontSize="large" />
          </IconButton>

          <IconButton
            sx={{ py: 1, color: "white" }}
            onClick={(event) => router.push("/Gallery")}
          >
            <CollectionsIcon fontSize="large" />
          </IconButton>
          <IconButton
            selected
            sx={{ py: 1 }}
            onClick={(event) => router.push("/Timeline")}
          >
            <HomeIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
          <IconButton onClick={(event) => router.push("/Students")}>
            <PeopleIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>

          {status === "authenticated" && (
            <IconButton
              onClick={(event) =>
                router.push(`/Students/${data.user.student_id}`)
              }
              sx={{ py: 1, color: "white" }}
            >
              <Avatar size="32px" src={data.user.avatar} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
