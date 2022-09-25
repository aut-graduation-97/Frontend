import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Avatar from "../../../SharedComponents/Elements/Avatar";

export default function CommentItem({ title, text, date }) {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box
        sx={{
          py: 1,
          px: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
        }}
      >
        <Box sx={{ ml: 1 }}>
          <Avatar size={"50px"} useDefault={true} />
        </Box>

        <Typography
          variant="h6"
          component="h5"
          sx={{
            mt: phone ? 1.5 : 2,
            pb: 1,
            fontWeight: "600",
            height: "auto",
          }}
        >
          ناشناس
        </Typography>
      </Box>

      <Typography variant="p" component="p" sx={{ px: 3 }}>
        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
        طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی د
      </Typography>

      <Divider sx={{ my: 2 }} />
    </>
  );
}
