import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Avatar from "../../../SharedComponents/Elements/Avatar";

export default function CommentItem({ text, date }) {
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
        {text}
      </Typography>
      <Box textAlign={"left"}>
        <Typography variant={"caption"}>{date}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
    </>
  );
}
