import { ThemeProvider } from '@emotion/react';
import createTheme from '@mui/material/styles/createTheme';
import Container from '@mui/material/Container';
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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
