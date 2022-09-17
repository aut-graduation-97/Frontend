import Box from '@mui/material/Box';
import LoginForm from '../components/Login/LoginFrom';
import Paper from '@mui/material/Paper';

export default function Login() {
  return (
    <Box
      sx={{
        width: '300px',
        height: '600px',
        m: 'auto',
        top: '20vh',
        position: 'relative',
      }}
    >
      <Paper elevation={15}>
        <LoginForm />
      </Paper>
    </Box>
  );
}
