import {
  Typography,
  Grid,
  Paper,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import Image from "next/image";

import Avatar from "../SharedComponents/Elements/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

export default function MostCard({ avatar, name, sid, medal }) {
  const phone = useMediaQuery("(max-width: 600px)");
  const router = useRouter();
  return (
    <>
      <Paper elevation={7} sx={styles.wrapper}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            size={phone ? "65px" : "100px"}
            sx={{ my: "auto" }}
            // ONLINE
            // src={avatar}
          />
          <Box sx={{ my: "auto", mx: 3 }}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {/*ONLINE*/}
              {/*{sid}*/}
              9931077
            </Typography>
            <Button
              sx={{ display: "flex", mt: 2 }}
              startIcon={<AccountCircleIcon sx={{ ml: 0.4 }} />}
              size="small"
              variant="outlined"
              onClick={(e) => router.push(`/Students/${sid}`)}
            >
              پروفایل
            </Button>
          </Box>
        </Box>

        {medal && (
          <Box sx={styles.imageWrapper}>
            <Image src={medal} alt="medal" />
          </Box>
        )}
      </Paper>
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    p: 2,
    my: 2,
  },
  imageWrapper: { width: "50px", my: "auto", p: 1 },
};
