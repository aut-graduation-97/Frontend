import { AppBar, Toolbar, IconButton } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from '@mui/icons-material/Gavel';
import CollectionsIcon from '@mui/icons-material/Collections';
import PeopleIcon from '@mui/icons-material/People';
import Avatar from '../SharedComponents/Elements/Avatar';
import { useRouter } from 'next/router';

export default function TimelineAppBar() {
  const router = useRouter();
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <IconButton
          sx={{ py: 1, color: 'white' }}
          onClick={(event) => router.push('/Mosts')}
        >
          <GavelIcon fontSize="large" />
        </IconButton>

        <IconButton
          sx={{ py: 1, color: 'white' }}
          onClick={(event) => router.push('/')}
        >
          <CollectionsIcon fontSize="large" />
        </IconButton>
        <IconButton
          selected
          sx={{ py: 1 }}
          onClick={(event) => router.push('/')}
        >
          <HomeIcon sx={{ color: 'white' }} fontSize="large" />
        </IconButton>
        <IconButton onClick={(event) => router.push('/Students')}>
          <PeopleIcon sx={{ color: 'white' }} fontSize="large" />
        </IconButton>

        <IconButton sx={{ py: 1, color: 'white' }}>
          <Avatar size="32px" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
