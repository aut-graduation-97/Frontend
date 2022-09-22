import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import LoginFormDrawer from "../components/Login/LoginFormDrawer";
import { useRouter } from "next/router";

export default function Login() {
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
  const phone = useMediaQuery("(max-width:600px)");

  const styles = {
    display: "flex",
    justifyContent: phone ? "center" : "space-between",
    flexDirection: phone ? "column" : "row",
    alignItems: "center",
    height: "150vh",
    width: "80vw",
    m: "auto",
    px: 5,
  };

  return (
    <>
      <LoginFormDrawer show={showDrawer} setShow={setShowDrawer} />
      <Box sx={styles}>
        <Button
          sx={{ m: 4 }}
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
