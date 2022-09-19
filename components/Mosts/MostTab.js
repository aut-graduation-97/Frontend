import MostCard from './MostCard';

import goldMedal from '../../public/gold-medal.png';
import silverMedal from '../../public/silver-medal.png';
import bronzeMedal from '../../public/bronze-medal.png';
import { Grid, useMediaQuery } from '@mui/material';

const DUMMY_NAME = 'محمد علی محمدی';

// Student name and image must be passed to this component
export default function MostTab({ names, avatar }) {
  const phone = useMediaQuery('(max-width:900px)');

  const phoneOrder = (
    <Grid container spacing={5} sx={{ py: phone ? 2 : 0 }}>
      <Grid item lg={4} md={4} xs={12}>
        <MostCard
          medal={goldMedal}
          name={names[0]}
          shift={{ my: 0 }}
          key="1"
          avatar={avatar}
        />
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <MostCard
          medal={silverMedal}
          name={names[1]}
          shift={{ my: 5 }}
          key="2"
          avatar={avatar}
        />
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <MostCard
          medal={bronzeMedal}
          name={names[2]}
          shift={{ my: 8 }}
          key="3"
          avatar={avatar}
        />
      </Grid>
    </Grid>
  );
  return (
    <>
      {phone ? (
        phoneOrder
      ) : (
        <Grid container spacing={5} sx={{ py: phone ? 2 : 0 }}>
          <Grid item lg={4} md={4} xs={12}>
            <MostCard
              medal={bronzeMedal}
              name={names[2]}
              shift={{ my: 8 }}
              key="3"
              avatar={avatar}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <MostCard
              medal={goldMedal}
              name={names[0]}
              shift={{ my: 0 }}
              key="1"
              avatar={avatar}
            />
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <MostCard
              medal={silverMedal}
              name={names[1]}
              shift={{ my: 5 }}
              key="2"
              avatar={avatar}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
