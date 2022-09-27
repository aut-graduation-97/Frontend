import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

import Avatar from "../SharedComponents/Elements/Avatar";

export default function StudentCard({ name, avatar, sid, index }) {
  const router = useRouter();
  const phone = useMediaQuery("(max-width:600px)");
  const shift = index % 2 === 0 ? { my: 4 } : { my: 0 };

  return (
    <>
      <Grid item xs={6} md={4} lg={3} key={sid}>
        <Paper
          elevation={7}
          sx={{ margin: "auto", maxWidth: 300, p: 3, ...shift }}
        >
          <Avatar size="100px" link={avatar} />
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: "center", py: 2 }}
          >
            {name}
          </Typography>

          <Button
            sx={{
              display: "flex",
              width: phone ? "100%" : "70%",
              m: "auto",
              mt: 2,
            }}
            startIcon={<AccountCircleIcon sx={{ ml: 0.4 }} />}
            size="small"
            variant="outlined"
            onClick={(e) => router.push(`/Students/${sid}`)}
          >
            پروفایل
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
