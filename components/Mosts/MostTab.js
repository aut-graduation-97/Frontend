import MostCard from "./MostCard";

import goldMedal from "../../public/gold-medal.png";
import silverMedal from "../../public/silver-medal.png";
import bronzeMedal from "../../public/bronze-medal.png";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { getMosts } from "../../api/mosts-api";
import { useQuery } from "@tanstack/react-query";
import CustomError from "../SharedComponents/Elements/CustomError";

const DUMMY_NAME = "محمد علی محمدی";

const returnMedal = (index) => {
  if (index === 0) return goldMedal;
  if (index === 1) return silverMedal;
  if (index === 2) return bronzeMedal;
  else return null;
};

export default function MostTab({ id, names }) {
  // ONLINE-remove this return
  return (
    <Box>
      <MostCard medal={goldMedal} name={names[2]} key="3" />
      <MostCard medal={silverMedal} name={names[2]} key="3" />
      <MostCard medal={bronzeMedal} name={names[2]} key="3" />
      <MostCard medal={""} name={names[2]} key="3" />
    </Box>
  );

  const { data, isLoading, error } = useQuery([`mosts-${id}`], () =>
    getMosts(id)
  );

  if (isLoading) return <div>Spinner</div>;
  if (error) return <CustomError errorMessage={error.message} />;
  // TODO: check for empty data on server
  if (data) {
    data.sort((a, b) => a.count - b.count);

    return (
      <Box>
        {data.map((el, i) => (
          <MostCard
            key={i}
            medal={returnMedal(i)}
            name={el.name}
            avatar={el.avatar}
            sid={el.student_id}
          />
        ))}
      </Box>
    );
  }
}
