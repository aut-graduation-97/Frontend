import { Typography, Grid, Paper, Box } from '@mui/material';
import Image from 'next/image';

import Avatar from '../UI/Elements/Avatar';

export default function MostCard({ avatar, name, shift, key, medal }) {
  return (
    <>
      <Grid item xs={4} key={key}>
        <Paper
          elevation={7}
          sx={{ margin: 'auto', maxWidth: 300, py: 3, ...shift }}
        >
          <Avatar size="125px" />
          <Typography variant="h5" sx={{ textAlign: 'center', py: 3 }}>
            {name}
          </Typography>

          <Box sx={{ width: '50px', m: 'auto', pt: 4 }}>
            <Image src={medal} alt="medal" />
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
