import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useRef } from "react";
import { forgotPassword } from "../../api/login-api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ForgotPasswordAccordion() {
  const sidRef = useRef();

  const { data, error, isFetching, refetch, status } = useQuery({
    queryKey: ["forgotPassword"],
    queryFn: () => forgotPassword({ student_id: sidRef.current.value }),
    enabled: false,
  });

  if (error) {
    toast.error("خطایی رخ داده است.");
  }

  if (data && status === "success") {
    toast.success("عملیات موفقیت آمیز بود. ایمیل خود را چک کنید.");
  }

  return (
    <Accordion sx={{ width: "300px", boxShadow: "none" }}>
      <AccordionSummary
        sx={{ alignItems: "center", justifyContent: "center" }}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant={"body2"}
          sx={{ m: "auto", textDecoration: "underline" }}
        >
          فراموشی رمز عبور
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          inputRef={sidRef}
          id="outlined-basic"
          label="شماره دانشجویی"
          variant="outlined"
        />
        <LoadingButton
          onClick={() => refetch()}
          sx={{ m: "auto", mt: 2 }}
          loading={isFetching}
          variant="contained"
        >
          بازیابی
        </LoadingButton>
      </AccordionDetails>
    </Accordion>
  );
}
