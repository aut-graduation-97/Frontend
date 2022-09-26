import { Box, Tab, useMediaQuery } from "@mui/material";
import { TabPanel, TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";

import TweetList from "../../SharedComponents/Tweets/TweetList";
import CommentList from "./Comments/CommentList";
import AddComment from "./Comments/AddComment";
import { useRouter } from "next/router";

export default function ProfileMainTabs({ isEditable, onScroll }) {
  const [tabContent, setTabContent] = useState("1");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setTabContent(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", mt: 1, overflowY: "scroll", height: "65vh" }}
      onScroll={onScroll}
    >
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

        <TabPanel value="1" sx={{ pt: 0 }}>
          <TweetList tmp="1" isEditable={isEditable} />
        </TabPanel>

        <TabPanel value="2">
          <AddComment sid={router.query.studentId} />
          <CommentList sid={router.query.studentId} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
