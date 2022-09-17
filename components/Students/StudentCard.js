import { Button, Typography, Grid, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '../UI/Elements/Avatar';

export default function ({ name, avatar, profileLink, shift, key }) {
  return (
    <>
      <Grid item xs={6} md={4} lg={3} key={key}>
        <Paper
          elevation={7}
          sx={{ margin: 'auto', maxWidth: 300, p: 3, ...shift }}
        >
          <Avatar size="100px" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: 'center', py: 2 }}
          >
            {name}
          </Typography>

          <Button
            sx={{ display: 'flex', width: '70%', m: 'auto', mt: 2 }}
            startIcon={<AccountCircleIcon sx={{ ml: 0.4 }} />}
            size="small"
            variant="outlined"
            onClick={(e) => router.push(profileLink)}
          >
            پروفایل
          </Button>
        </Paper>
      </Grid>
    </>
  );
}
