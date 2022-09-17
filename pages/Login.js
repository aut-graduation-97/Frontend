import Box from '@mui/material/Box';
import LoginForm from '../components/Login/LoginFrom';
import Paper from '@mui/material/Paper';
export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 5,
      }}
    >
      <Paper elevation={15} sx={{ mt: 13, width: 400 }}>
        <LoginForm />
      </Paper>
    </Box>
  );
}
