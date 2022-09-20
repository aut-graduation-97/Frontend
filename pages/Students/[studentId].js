import { Box, Grid, Typography } from '@mui/material';

import ProfileMain from '../../components/Profile/Main/ProfileMain';
import Avatar from '../../components/SharedComponents/Elements/Avatar';
import ContactTable from '../../components/Profile/Side/ContactTable';

export default function Profile() {
  return (
    <>

      <Box
        style={{
          background: '#3d5dd1',
          height: '120px',
          width: '100%',
        }}
      ></Box>
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12} sx={{ mt: '-60px' }}>
          <Avatar size="150px" />
          <ContactTable />
        </Grid>

        <Grid item lg={9} md={9} sm={9} xs={12}>
          <ProfileMain />
        </Grid>
      </Grid>
    </>
  );
}
