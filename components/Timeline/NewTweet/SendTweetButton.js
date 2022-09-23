import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import formData from "form-data";

export default function SendTweetButton({ disabled, tweetText, tweetImages }) {
  // For keeping modal component thinner, we can send the data to  backend from here. not a usual practice but it's
  // ok for now
  const sendTweetHandler = (e) => {
    e.preventDefault();

    console.log("tweetImages", tweetImages[0]);
  };

  return (
    <Button
      variant="contained"
      endIcon={<SendIcon sx={{ mx: 1 }} />}
      disabled={!!disabled}
      onClick={sendTweetHandler}
    >
      توییت کن
    </Button>
  );
}
