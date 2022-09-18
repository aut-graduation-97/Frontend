import MostCard from './MostCard';

import goldMedal from '../../public/gold-medal.png';
import silverMedal from '../../public/silver-medal.png';
import bronzeMedal from '../../public/bronze-medal.png';
import { Grid } from '@mui/material';

const DUMMY_NAME = 'محمد علی محمدی';

// Student name and image must be passed to this component
export default function MostTab({ names, avatar }) {
  return (
    <Grid container spacing={5} sx={{ py: 8 }}>
      <MostCard
        medal={bronzeMedal}
        name={names[2]}
        shift={{ my: 8 }}
        key="3"
        avatar={avatar}
      />
      <MostCard
        medal={goldMedal}
        name={names[0]}
        shift={{ my: 0 }}
        key="1"
        avatar={avatar}
      />
      <MostCard
        medal={silverMedal}
        name={names[1]}
        shift={{ my: 5 }}
        key="2"
        avatar={avatar}
      />
    </Grid>
  );
}
