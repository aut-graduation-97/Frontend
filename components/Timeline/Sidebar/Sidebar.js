import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import CollectionsIcon from '@mui/icons-material/Collections';
import PeopleIcon from '@mui/icons-material/People';

import Avatar from '../../UI/Elements/Avatar';

import { Typography } from '@mui/material';

export default function Sidebar() {
  const router = useRouter();

  return (
    <Box sx={{ width: '100%'}}>

      <Box  sx={{py: 6}}>
      <Avatar size='128px' />
      </Box>
     
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        <ListItemButton selected sx={{ py: 1 }} onClick={(event) => router.push('/')}>
          <ListItemIcon >
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

        <ListItemButton sx={{ py: 1 }} onClick={(event) => router.push('/')}>
          <ListItemIcon>
            <GavelIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> نتایح ترین ها</Typography>
        </ListItemButton>

        <ListItemButton sx={{ py: 1 }} onClick={(event) => router.push('/')}>
          <ListItemIcon>
            <CollectionsIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> گالری</Typography>
        </ListItemButton>

        <ListItemButton sx={{ py: 1 }} onClick={(event) => router.push('/Students')}>
          <ListItemIcon>
            <PeopleIcon fontSize="large" />
          </ListItemIcon>
          <Typography variant="h6"> دانشجویان</Typography>
        </ListItemButton>
      </List>
    </Box>
  );
}
