import { ThemeProvider } from "@emotion/react";
import Container from "@mui/material/Container";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../styles/mui-styles";
import axios from "axios";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Axios Global Config
  axios.defaults.baseURL =
    "https://test-bda7f-default-rtdb.europe-west1.firebasedatabase.app/";
  // ONLINE - add actual token from session or local storage
  // axios.defaults.headers.common["Authorization"] = "s";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            toastClassName={"toast"}
          />
          <Container maxWidth="lg">
            <Component {...pageProps} />
          </Container>
        </QueryClientProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
