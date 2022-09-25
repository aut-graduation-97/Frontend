import Box from "@mui/material/Box";
import TweetItem from "../../../SharedComponents/Tweets/TweetItem";
import CommentItem from "./CommentItem";
import { useQuery } from "@tanstack/react-query";
import { getAllComments } from "../../../../api/students-api";
import { toast } from "react-toastify";

const DUMMY_TEXT =
  "        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از\n" +
  "        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و\n" +
  "        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای\n" +
  "        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی د";
export default function CommentList({ sid }) {
  // ONLINE - just remove this return
  return (
    <Box sx={{ my: 3 }}>
      <CommentItem text={DUMMY_TEXT} date={"1401/01/02 23:10"} />
      <CommentItem text={DUMMY_TEXT} date={"1401/01/02 23:10"} />
      <CommentItem text={DUMMY_TEXT} date={"1401/01/02 23:10"} />
    </Box>
  );

  const { data, isLoading, error } = useQuery(["get-comments"], () =>
    getAllComments(sid)
  );

  if (error) {
    toast.error(error.message);
  }

  if (isLoading) return <>--spinner loading</>;

  if (data && data.length === 0)
    return <Box sx={{ textAlign: "center" }}>نظری ثبت نشده است</Box>;

  return (
    <Box sx={{ my: 3 }}>
      {data.map((el, i) => (
        <CommentItem key={i} text={el.text} date={el.date} />
      ))}
    </Box>
  );
}
