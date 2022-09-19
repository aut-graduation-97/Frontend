import { AppBar, Toolbar, IconButton, Box, Fab } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import CollectionsIcon from '@mui/icons-material/Collections';
import PeopleIcon from '@mui/icons-material/People';
import Avatar from '../SharedComponents/Elements/Avatar';

export default function TimelineAppBar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <IconButton
          selected
          sx={{ py: 1 }}
          onClick={(event) => router.push('/')}
        >
          <HomeIcon sx={{ color: 'white' }} fontSize="large" />
        </IconButton>

        <IconButton
          sx={{ py: 1, color: 'white' }}
          onClick={(event) => router.push('/')}
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>

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

        <IconButton onClick={(event) => router.push('/Students')}>
          <PeopleIcon sx={{ color: 'white' }} fontSize="large" />
        </IconButton>
        <IconButton>
          <Avatar size="32px" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
