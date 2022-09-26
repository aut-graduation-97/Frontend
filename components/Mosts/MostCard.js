import { Typography, Grid, Paper, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

import Avatar from "../SharedComponents/Elements/Avatar";

export default function MostCard({ avatar, name, sid, medal }) {
  console.log(medal);
  const phone = useMediaQuery("(max-width: 600px)");
  console.log("phone", phone);
  return (
    <>
      <Paper
        elevation={7}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          my: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Avatar
            size={phone ? "65px" : "100px"}
            sx={{ my: "auto" }}
            // ONLINE
            // src={avatar}
          />
          <Box sx={{ my: "auto", mx: 3 }}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {/*ONLINE*/}
              {/*{sid}*/}
              9931077
            </Typography>
          </Box>
        </Box>

        {medal && (
          <Box sx={{ width: "50px", my: "auto", p: 1 }}>
            <Image src={medal} alt="medal" />
          </Box>
        )}
      </Paper>
    </>
  );
}
