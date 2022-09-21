import { Alert, Divider, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function CustomError({ errorMessage, redirectTo }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        py: 10,
        width: '80%',
        m: 'auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Alert variant="outlined" severity="error">
        <Typography variant="h5">{errorMessage}</Typography>
      </Alert>
      <Divider />
      <Button
        variant="contained"
        sx={{ my: 5 }}
        onClick={() => router.push(redirectTo)}
      >
        بازگشت
      </Button>
    </Box>
  );
}
