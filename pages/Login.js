import { Box, Button, useMediaQuery } from "@mui/material";
import { useState } from "react";
import LoginFormDrawer from "../components/Login/LoginFormDrawer";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [showDrawer, setShowDrawer] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  const guestLoginHandler = () => {
    if (status === "authenticated") {
      toast.error("شما قبلا وارد شده اید");
      return;
    }
    router.push("/Timeline");
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
        <Button variant="contained" onClick={guestLoginHandler}>
          ورود به عنوان مهمان
        </Button>
      </Box>
    </>
  );
}

const styles = {
  display: "flex",
  justifyContent: {
    xs: "center",
    md: "space-between",
  },
  flexDirection: {
    xs: "column",
    md: "row",
  },
  alignItems: "center",
  height: "100vh",
  width: "80vw",
  m: "auto",
  px: 5,
};
