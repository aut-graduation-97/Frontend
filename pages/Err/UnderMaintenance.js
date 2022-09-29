import CustomError from "../../components/SharedComponents/Elements/CustomError";
import { Alert, Box, Button, Divider, Typography } from "@mui/material";

export default function UnderMaintenance() {
  return (
    <Box
      sx={{
        py: 10,
        width: "80%",
        m: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Alert variant="outlined" severity="error">
        <Typography variant="h5">
          {"متاسفانه سایت در حال حاضر در دست تعمیر می باشد 😔💔"}
        </Typography>
      </Alert>
      {"You can't do anything btw :)"}
    </Box>
  );
}
