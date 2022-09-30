import { Box } from "@mui/material";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function LoadingScreen() {
  return (
    <Box className={"backdrop"}>
      <Box className={"breathingWrapper"}>
        <Image
          className={"breathing"}
          src={logo}
          width={"100px"}
          height={"100px"}
          alt={"logo"}
        />
      </Box>
    </Box>
  );
}
