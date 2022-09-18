import { Box, Grid } from '@mui/material';
import ContactTable from './ContactTable';
import MainTabs from './MainTabs';

export default function ProfileMain() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ContactTable />
        </Grid>

        <Grid item xs={9}>
          <MainTabs />
        </Grid>
      </Grid>
    </Box>
  );
}
