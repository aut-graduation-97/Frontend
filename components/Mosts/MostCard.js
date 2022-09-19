import { Typography, Grid, Paper, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';

import Avatar from '../SharedComponents/Elements/Avatar';

export default function MostCard({ avatar, name, shift, key, medal }) {
  const phone = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Paper
        elevation={7}
        sx={{
          margin: 'auto',
          py: 3,
          ...shift,
          width: '100%',
        }}
      >
        <Avatar size="125px" />
        <Typography variant="h5" sx={{ textAlign: 'center', py: 3 }}>
          {name}
        </Typography>

        <Box sx={{ width: '50px', m: 'auto', pt: 4 }}>
          <Image src={medal} alt="medal" />
        </Box>
      </Paper>
    </>
  );
}
