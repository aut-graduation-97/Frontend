import { Alert, Divider, Typography, Box, Button } from "@mui/material";
import Router from "next/router";

/**
 *
 * @param errorMessage {string} the error message to be displayed
 * @param redirectTo {string} the path to redirect to after clicking the button
 * @returns {JSX.Element} a custom error component
 */
export default function CustomError({ errorMessage, redirectTo }) {
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
          {errorMessage ? errorMessage : "خطایی رخ داده است 😔💔"}
        </Typography>
      </Alert>
      <Divider />
      <Button
        variant="contained"
        sx={{ my: 5 }}
        onClick={() => Router.push(redirectTo ? redirectTo : "/Timeline")}
      >
        بازگشت
      </Button>
    </Box>
  );
}
