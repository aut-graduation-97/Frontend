import { Box, Grid } from '@mui/material';
import ContactTable from './ContactTable';
import MainTabs from './MainTabs';

export default function ProfileMain() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{ pt: { sm: '100px', lg: '16px' } }}
        >
          <ContactTable />
        </Grid>

        <Grid item lg={9} md={9} sm={12} xs={12}>
          <MainTabs />
        </Grid>
      </Grid>
    </Box>
  );
}
