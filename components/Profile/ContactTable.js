import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Chip,
  useMediaQuery,
} from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ContactTable() {


  const getChip = (text) => (
    <Chip
      label={text}
      variant="outlined"
      size="small"
      clickable
      color="primary"
      //FIXME: width most not be hardcoded
      sx={{ width: '180px', direction: 'ltr' }}
    />
  );
  return (
    <TableContainer
      component={Paper}
      sx={{ overflowX: 'auto', width: '100%', mt: 2 }}
    >
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="right">
              <AlternateEmailIcon />
            </TableCell>
            <TableCell align="left">{getChip('folani@yahoo.com')}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="right">
              <PhoneAndroidIcon />
            </TableCell>
            <TableCell align="left">{getChip('0910 600 8858')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <TwitterIcon />
            </TableCell>
            <TableCell align="left">{getChip('https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <TelegramIcon />
            </TableCell>
            <TableCell align="left">{getChip('https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <InstagramIcon />
            </TableCell>
            <TableCell align="left">{getChip('t.me/fnsdjgnskngkjds')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <GitHubIcon />
            </TableCell>
            <TableCell align="left">{getChip('https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
              <LinkedInIcon />
            </TableCell>
            <TableCell align="left">{getChip('https://stackoverflow.com/questions/17295219/overflow-scroll-css-is-not-working-in-the-div')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
