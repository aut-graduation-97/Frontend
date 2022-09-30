import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddUserForm from "./AddUserForm";
import AddImage from "./GalleryManagement/AddImage";
import { useSession } from "next-auth/react";
import CustomError from "../SharedComponents/Elements/CustomError";

export default function AdminPanelAccordion() {
  const { data, status } = useSession();
  let notAdmin = false;

  // TODO: this should be redirecting but didn't know how to do it
  if (status !== "authenticated" || !data.user.super_user) {
    notAdmin = true;
  }

  return (
    <>
      {notAdmin ? (
        <CustomError
          errorMessage={"شما اجازه دسترسی به این صفحه را ندارید"}
          redirectTo={"Login"}
        />
      ) : (
        <Box sx={{ p: 4 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>افزودن کاربر جدید</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AddUserForm />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>مدیریت گالری </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AddImage />
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </>
  );
}
