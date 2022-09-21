import { ThemeProvider } from '@emotion/react';
import createTheme from '@mui/material/styles/createTheme';
import Container from '@mui/material/Container';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn, sans-serif',
    h6: {
      fontSize: '16px',
    },

    p: {
      fontSize: '14px',
    },
  },
});

const queryClient = new QueryClient()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

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
            toastClassName={'toast'}
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
