import { Box, Tab, useMediaQuery } from "@mui/material";
import { TabPanel, TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

import TweetList from "../../SharedComponents/Tweets/TweetList";
import CommentList from "./Comments/CommentList";

export default function ProfileMainTabs({ isEditable }) {
  const [tabContent, setTabContent] = useState("1");

  const handleChange = (event, newValue) => {
    setTabContent(newValue);
  };
  console.log(isEditable, "isEditable");

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <TabContext value={tabContent}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={(e, newValue) => setTabContent(newValue)}
            aria-label="lab API tabs example"
          >
            <Tab sx={{ width: "50%" }} label="توییت ها" value="1" />
            <Tab sx={{ width: "50%" }} label="نظرات " value="2" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <TweetList tmp="1" isEditable={isEditable} />
        </TabPanel>

        <TabPanel value="2">
          <CommentList />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
