import { Grid } from "@mui/material";
import StudentCard from "./StudentCard";
import { getAllStudents } from "../../api/students-api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import CustomError from "../SharedComponents/Elements/CustomError";
import LoadingProgress from "../SharedComponents/UI/LoadingProgress";

const DUMMY_NAME = " جمشید نوروزی اصل ایذه تبار";

export default function StudentsList() {
  const returnDummyCards = () => {
    let tmp = [];

    for (let i = 0; i < 12; i++) {
      tmp.push(
        <StudentCard name={DUMMY_NAME} key={i} sid={12312321} index={i} />
      );
    }
    return tmp;
  };
  if (true) {
    return (
      <>
        <Grid container spacing={2} sx={{ p: 4 }}>
          {returnDummyCards()}
        </Grid>
      </>
    );
  }

  // ONLINE
  const {
    data: students,
    error,
    isLoading,
  } = useQuery(["students"], getAllStudents);

  if (isLoading) return <LoadingProgress />;

  if (error) {
    toast.error("خطا در دریافت اطلاعات دانشجویان");
    return (
      <>
        <CustomError />
      </>
    );
  }

  if (students && students.length === 0) {
    return (
      <>
        <Grid container spacing={2} sx={{ p: 4 }}>
          {students.map((el, i) => (
            <StudentCard
              name={el.name}
              avatar={el.avatar}
              key={i}
              sid={el.student_id}
            />
          ))}
        </Grid>
      </>
    );
  }
}
