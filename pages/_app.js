import { ThemeProvider } from "@emotion/react";
import createTheme from "@mui/material/styles/createTheme";
import Container from "@mui/material/Container";
import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

{
  /* FIXME: override TextField label css to move label to right  */
}
const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
    h6: {
      fontSize: "16px",
    },

    p: {
      fontSize: "14px",
    },
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Axios Global Config
  axios.defaults.baseURL =
    "https://test-bda7f-default-rtdb.europe-west1.firebasedatabase.app/";
  // ONLINE - add actual token from session or local storage
  // axios.defaults.headers.common["Authorization"] = "s";

  return (
    <ThemeProvider theme={theme}>
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
