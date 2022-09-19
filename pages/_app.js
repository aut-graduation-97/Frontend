import { ThemeProvider } from '@emotion/react';
import createTheme from '@mui/material/styles/createTheme';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../styles/globals.css';
import TimelineAppBar from '../components/Timeline/TimelineAppBar';

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
  const notWide = useMediaQuery('(max-width:900px)');
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
       {notWide ? <TimelineAppBar /> : null} 
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
