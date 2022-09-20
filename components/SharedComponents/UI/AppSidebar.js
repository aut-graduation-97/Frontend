import { useRouter } from 'next/router';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  Divider,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import CollectionsIcon from '@mui/icons-material/Collections';
import PeopleIcon from '@mui/icons-material/People';

import Avatar from '../Elements/Avatar';

export default function AppSidebar({ extraButtons, selected }) {
  const router = useRouter();

  // TODO: fetch current user data from database
  return (
    <Box
      sx={{
        pl: 1,
        width: '100%',
      }}
    >
      <Box sx={{ pb: 3 }}>
        <Avatar size="128px" />
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selected === 'TIMELINE'}
          sx={{ py: 1 }}
          onClick={(event) => router.push('/Timeline')}
        >
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6">تایم لاین</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === 'PROFILE'}
          sx={{ py: 1 }}
          onClick={(event) => router.push('/MyProfile')}
        >
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> پروفایل</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === 'MOSTS'}
          sx={{ py: 1 }}
          onClick={(event) => router.push('/Mosts')}
        >
          <ListItemIcon>
            <GavelIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6">ترین ها</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === 'GALLERY'}
          sx={{ py: 1 }}
          onClick={(event) => router.push('/')}
        >
          <ListItemIcon>
            <CollectionsIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> گالری</Typography>
        </ListItemButton>

        <ListItemButton
          selected={selected === 'STUDENTS'}
          sx={{ py: 1 }}
          onClick={(event) => router.push('/Students')}
        >
          <ListItemIcon>
            <PeopleIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> دانشجویان</Typography>
        </ListItemButton>

        {extraButtons ? <Divider /> : null}
        {extraButtons ? extraButtons() : null}
      </List>
    </Box>
  );
}
