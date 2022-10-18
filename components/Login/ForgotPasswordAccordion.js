import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRef } from "react";
import { forgotPassword } from "../../api/auth-api";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function ForgotPasswordAccordion() {
  const sidRef = useRef();

  const { data, error, isFetching, refetch, isSuccess } = useQuery({
    queryKey: ["forgotPassword"],
    queryFn: () => forgotPassword({ student_id: sidRef.current.value }),
    enabled: false,
  });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    refetch();
  };

  if (error) {
    toast.error(error.message);
  }

  if (isSuccess) {
    toast.success("عملیات موفقیت آمیز بود. ایمیل خود را چک کنید.");
  }

  return (
    <Accordion sx={styles.accordion}>
      <AccordionSummary
        sx={styles.accordionSummary}
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
      <form onSubmit={formSubmitHandler}>
        <AccordionDetails sx={styles.accordionDetails} color={"primary"}>
          <TextField
            inputRef={sidRef}
            id="outlined-basic"
            label="شماره دانشجویی"
            variant="filled"
            maxLength={6}
          />
          <LoadingButton
            type={"submit"}
            sx={{ m: "auto", my: 2 }}
            loading={isFetching}
            variant="contained"
          >
            بازیابی
          </LoadingButton>

          <Typography variant={"caption"} sx={{ opacity: 0.5 }}>
            درصورتی که شماره دانشجویی شما معتبر باشد، کلمه عبور جدید به ایمیل
            شما ارسال خواهد شد
          </Typography>
        </AccordionDetails>
      </form>
    </Accordion>
  );
}

const styles = {
  accordion: { width: "300px", boxShadow: "none", backgroundColor: "#22354e" },
  accordionSummary: { alignItems: "center", justifyContent: "center" },
  accordionDetails: { display: "flex", flexDirection: "column" },
};
