import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  useMediaQuery
} from '@mui/material/';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactTable() {
  const phone = useMediaQuery('(max-width:600px)');


  const getChip = (text) => (
    <Chip
      label={text}
      variant="outlined"
      size="small"
      clickable
      color="primary"
      sx={{ width: '100%', direction: 'ltr' }}
    />
  );
  return (
    <TableContainer component={Paper} sx={{ overflowX: 'auto', mt: phone ? '20vh': 5 }}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <AlternateEmailIcon />
            </TableCell>
            <TableCell align="left">{getChip('0910 600 8858')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="right">
              <PhoneAndroidIcon />
            </TableCell>
            <TableCell align="left">
              {getChip('sample text is here')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <TwitterIcon />
            </TableCell>
            <TableCell align="left">{getChip('sample text is here')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <TelegramIcon />
            </TableCell>
            <TableCell align="left">{getChip('sample text is here')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <InstagramIcon />
            </TableCell>
            <TableCell align="left">{getChip('sample text is here')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <GitHubIcon />
            </TableCell>
            <TableCell align="left">{getChip('sample text is here')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <LinkedInIcon />
            </TableCell>
            <TableCell align="left">{getChip('sample text is here')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
