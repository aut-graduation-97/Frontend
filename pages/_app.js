
import Container from '@mui/material/Container';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return(
    <>
    <Container maxWidth="md">
    <Component {...pageProps} />
    </Container>

    </>
  ) 
}

export default MyApp
