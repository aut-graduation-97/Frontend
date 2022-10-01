import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Router from "next/router";

import Avatar from "../SharedComponents/Elements/Avatar";

export default function StudentCard({ name, avatar, sid, index }) {
  const phone = useMediaQuery("(max-width:600px)");

  const shift = index % 2 === 0 ? { my: 4 } : { my: 0 };
  return (
    <>
      <Grid item xs={6} md={4} lg={3} key={sid}>
        <Paper
          elevation={7}
          sx={{ margin: "auto", maxWidth: 300, p: 3, ...shift }}
        >
          <Avatar size={phone ? "80px" : "100px"} link={avatar} />
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: "center", py: 2 }}
          >
            {name}
          </Typography>

          <Button
            sx={styles.button}
            startIcon={<AccountCircleIcon sx={{ ml: 0.4 }} />}
            size="small"
            variant="outlined"
            onClick={(e) => Router.push(`/Students/${sid}`)}
          >
            پروفایل
          </Button>
        </Paper>
      </Grid>
    </>
  );
}

const styles = {
  button: {
    display: "flex",
    width: {
      xs: "100%",
      sm: "70%",
      md: "70%",
    },
    m: "auto",
    mt: 2,
  },
};
