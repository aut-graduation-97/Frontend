import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function SendTweetButton({ onClick, disabled, tweetContent }) {
  // For keeping modal component thinner, we can send the data to  backend from here. not a usual practice but it's
  // ok for now
  const sendTweetHandler = (e) => {
    console.log(tweetContent);
  };

  return (
    <Button
      variant="contained"
      endIcon={<SendIcon sx={{ mx: 1 }} />}
      disabled={!!disabled}
      onClick={sendTweetHandler}
      sx={{ width: "50%", m: "auto" }}
    >
      توییت کن
    </Button>
  );
}
