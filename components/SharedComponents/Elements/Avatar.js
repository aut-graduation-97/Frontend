import Image from "next/image";
import Box from "@mui/material/Box";
import defaultImage from "../../../public/profile-picture.jpg";

export default function Avatar({
  size,
  src = "https://i.pravatar.cc/300",
  useDefault,
}) {
  return (
    <Box
      sx={{
        borderRadius: "50%",
        overflow: "hidden",
        width: size,
        height: size,
        margin: "auto",
      }}
      style={{ border: "solid 5px white" }}
    >
      <Image
        src={useDefault ? defaultImage : src}
        alt="avatar"
        width={150}
        height={150}
        className="rounded-full"
      />
    </Box>
  );
}
