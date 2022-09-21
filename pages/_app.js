import { ThemeProvider } from '@emotion/react';
import createTheme from '@mui/material/styles/createTheme';
import Container from '@mui/material/Container';
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Vazirmatn, sans-serif',
    h6: {
      fontSize: '1rem',
    },
    p: {
      fontSize: '15px',
    },
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Container maxWidth="lg">
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
