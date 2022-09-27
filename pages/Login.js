import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import LoginFormDrawer from "../components/Login/LoginFormDrawer";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
  const wideScreen = useMediaQuery("(min-width:900px)");

  const styles = {
    display: "flex",
    justifyContent: wideScreen ? "space-between" : "center",
    flexDirection: wideScreen ? "row" : "column",
    alignItems: "center",
    height: "100vh",
    width: "80vw",
    m: "auto",
    px: 5,
  };

  return (
    <>
      <Box sx={styles}>
        <LoginFormDrawer show={showDrawer} setShow={setShowDrawer} />
        <Button
          sx={{ m: 4, width: "143px" }}
          variant="contained"
          onClick={() => setShowDrawer(true)}
        >
          ورود اعضا
        </Button>
        <Button variant="contained" onClick={(e) => router.push("/Timeline")}>
          ورود به عنوان مهمان
        </Button>
      </Box>
    </>
  );
}
