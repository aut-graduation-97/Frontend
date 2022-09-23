import { Grid } from "@mui/material";
import StudentCard from "./StudentCard";
import { getAllStudents } from "../../api/students-api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const DUMMY_NAME = " جمشید نوروزی اصل ایذه تبار";

export default function StudentsList() {
  // ONLINE
  // const {
  //   data: students,
  //   error,
  //   isLoading,
  // } = useQuery(["students"], getAllStudents);
  //
  // if (isLoading) {
  //   return <div>SPINNER</div>;
  // }
  // if (error) {
  //   toast.error("خطا در دریافت اطلاعات دانشجویان");
  // }

  const returnCardsArray = () => {
    let tmp = [];

    // ONLINE
    // students.map((el, i) => {
    //   const shift = i % 2 === 0 ? {my: 4} : {my: 0};
    //   tmp.push(
    //       <StudentCard name={el.name} avatar={el.avatar} key={i} shift={shift} sid={el.student_id}/>
    //   );
    // });

    for (let i = 0; i < 12; i++) {
      const shift = i % 2 === 0 ? { my: 4 } : { my: 0 };
      tmp.push(
        <StudentCard name={DUMMY_NAME} key={i} shift={shift} sid={12312321} />
      );
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
