import { Box, LinearProgress, styled } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function LoadingProgress() {
  // const theme = createTheme({
  //   components: {
  //     MuiLinearProgress: {
  //       styleOverrides: {
  //         bar: {
  //           backgroundColor: "#b8ce54",
  //         },
  //       },
  //     },
  //   },
  // });

  const StyledProgress = styled(LinearProgress)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    "& .MuiLinearProgress-bar": {
      backgroundColor: theme.palette.secondary.main,
    },
  }));

  return (
    <Box
      sx={{
        position: "fixed",
        top: {
          xs: 30,
          sm: 64,
          md: 0,
          lg: 0,
        },
        left: 0,
        width: "100%",
      }}
    >
      <StyledProgress />

      {/*<ThemeProvider theme={theme}>*/}
      {/*  <LinearProgress />*/}
      {/*</ThemeProvider>*/}
    </Box>
  );
}
