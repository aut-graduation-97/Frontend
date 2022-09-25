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

export default function AdminPanelAccordion() {
  return (
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
  );
}
