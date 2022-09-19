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

import Avatar from '../SharedComponents/Elements/Avatar';

export default function Sidebar() {
  const router = useRouter();

  // TODO: fetch current user data from database
  return (
    <Box
      sx={{
        mt: 4,
        pl: 1,
        width: '100%',
        height: '90vh',
        borderLeft: 1,
        borderColor: '#d1d1d1',
      }}
    >
      <Box sx={{ py: 6 }}>
        <Avatar size="128px" />
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected
          sx={{ py: 1 }}
          onClick={(event) => router.push('/')}
        >
          <ListItemIcon>
            <HomeIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6">تایم لاین</Typography>
        </ListItemButton>

        <ListItemButton sx={{ py: 1 }} onClick={(event) => router.push('/')}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> پروفایل</Typography>
        </ListItemButton>

        <ListItemButton
          sx={{ py: 1 }}
          onClick={(event) => router.push('/Mosts')}
        >
          <ListItemIcon>
            <GavelIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> نتایج ترینها</Typography>
        </ListItemButton>

        <ListItemButton sx={{ py: 1 }} onClick={(event) => router.push('/')}>
          <ListItemIcon>
            <CollectionsIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> گالری</Typography>
        </ListItemButton>

        <ListItemButton
          sx={{ py: 1 }}
          onClick={(event) => router.push('/Students')}
        >
          <ListItemIcon>
            <PeopleIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> دانشجویان</Typography>
        </ListItemButton>
      </List>
    </Box>
  );
}
