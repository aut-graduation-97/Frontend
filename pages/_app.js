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
import { CssBaseline } from "@mui/material";

{
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
  palette: {
    mode: "dark",
    primary: {
      main: "#8254ce",
      light: "#b085f5",
      dark: "#6a3b9a",
    },
    secondary: {
      main: "#E94560",
      light: "#ff7b93",
      dark: "#b61827",
    },

    background: {
      default: "#16213E",
      paper: "#081d3a",
    },
    text: {
      primary: "#d3d3d3",
      secondary: "#b4b4b4",
    },
    common: {
      primary: {
        main: "#8254ce",
      },
    },
  },

  components: {},
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
