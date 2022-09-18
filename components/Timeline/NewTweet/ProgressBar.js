import { Box, CircularProgress, Typography } from '@mui/material';

export default function ProgressBar({ progress }) {
  let color = 'primary';

  if (progress > 100) {
    color = 'error';
    progress = 100;
  }

  return (
    <Box sx={{ position: 'relative', display: 'flex', width: 50 }}>
      <CircularProgress variant="determinate" value={progress} color={color} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'right',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{ mr: 0.7 }}
        >
          {`${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
