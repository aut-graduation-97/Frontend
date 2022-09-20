import HeaderImage from '../components/SharedComponents/UI/HeaderImage';

//1
const tabletOrLower = useMediaQuery('(min-width:900px)');
//2
const JSX = phone ? (
  <>
    <HeaderImage />
    <Grid container spacing={2}>
      <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: '-60px' }}>
        <AppSidebar />
      </Grid>

      <Grid item lg={9} md={9} sm={9} xs={12}>
        <Box sx={{ overflowY: 'scroll', height: '75vh' }}>
          // Main components here
        </Box>
      </Grid>
    </Grid>
  </>
) : (
  <>
    <>
      // Components for main side of the page
      <AppToolbar />
    </>
  </>
);
