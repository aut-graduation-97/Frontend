import { Typography, Divider, Grid } from '@mui/material';
import StudentCard from './StudentCard';

const DUMMY_NAME = ' جمشید نوروزی اصل ایذه تبار';

export default function () {
  //TODO: fetch students from database.
  // pass them to function below

  const returnCardsArray = () => {
    let tmp = [];
    for (let i = 0; i < 12; i++) {
      const shift = i % 2 === 0 ? { my: 4 } : { my: 0 };
      tmp.push(<StudentCard name={DUMMY_NAME} key={i} shift={shift} />);
    }
    return tmp;
  };

  return (
    <>
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: 'center', pt: 4, pb: 2 }}
      >
        دانشجویان فارغ التحصیل ورودی ۹۷ دانشکده
      </Typography>

      <Divider variant="inset" sx={{ m: 'auto', width: '80%' }} />

      <Grid container spacing={2} sx={{ my: 4 }}>
        {returnCardsArray()}
      </Grid>
    </>
  );
}
