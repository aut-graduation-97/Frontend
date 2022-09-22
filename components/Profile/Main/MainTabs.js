import { Box, Tab, useMediaQuery } from "@mui/material";
import { TabPanel, TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

import TweetList from "../../SharedComponents/Tweets/TweetList";

export default function MainTabs() {
  const [tabContent, setTabContent] = useState("1");
  const phone = useMediaQuery("(max-width:600px)");

  const handleChange = (event, newValue) => {
    setTabContent(newValue);
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <TabContext value={tabContent}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="توییت ها" sx={{ width: "50%" }} value="1" />
            <Tab label="نظرات بقیه" sx={{ width: "50%" }} value="2" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <TweetList tmp="1" />
        </TabPanel>

        <TabPanel value="2">
          <TweetList tmp="2" />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
