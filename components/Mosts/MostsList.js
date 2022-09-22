import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";
import MostTab from "./MostTab";

const DUMMY_NAMES1 = ["محمد علی محمدی", "محمد علی محمدی", "محمد علی محمدی"];
const DUMMY_NAMES2 = ["علی نوروزی", "علی نوروزی", "علی نوروزی"];
const DUMMY_NAMES3 = ["محمدحمدی", "محمد  محمدی", "محمد  محمدی"];

export default function MostsList() {
  const [tabContent, setTabContent] = useState("1");

  const handleChange = (event, newValue) => {
    setTabContent(newValue);
  };
  // TODO:
  // Fetch all mosts data from db. all of them.
  // create a <MostTab /> for each one of them.

  return (
    <>
      <Box sx={{ width: "100%", my: 5 }}>
        <TabContext value={tabContent}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="خنگ ترین" value="1" />
              <Tab label="باحال ترین " value="2" />
              <Tab label="تیز ترین" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <MostTab names={DUMMY_NAMES1} />
          </TabPanel>

          <TabPanel value="2">
            <MostTab names={DUMMY_NAMES2} />
          </TabPanel>

          <TabPanel value="3">
            <MostTab names={DUMMY_NAMES3} />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
