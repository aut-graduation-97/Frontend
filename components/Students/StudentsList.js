import { Grid } from "@mui/material";
import StudentCard from "./StudentCard";

const DUMMY_NAME = " جمشید نوروزی اصل ایذه تبار";

export default function StudentsList() {
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
      <Grid container spacing={2} sx={{ p: 4 }}>
        {returnCardsArray()}
      </Grid>
    </>
  );
}
