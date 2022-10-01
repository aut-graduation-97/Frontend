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

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <TabContext value={tabContent}>
        <Box sx={{ borderBottom: 1, borderColor: "#452c77", mx: 2 }}>
          <TabList
            onChange={(e, newValue) => setTabContent(newValue)}
            aria-label="lab API tabs example"
          >
            <Tab sx={{ width: "50%" }} label="توییت ها" value="1" />
            <Tab sx={{ width: "50%" }} label="نظرات " value="2" />
          </TabList>
        </Box>

        <TabPanel value="1" sx={styles.tabPanel} onScroll={onScroll}>
          <TweetList tmp="1" isEditable={isEditable} />
        </TabPanel>

        <TabPanel value="2" sx={styles.tabPanel} onScroll={onScroll}>
          <AddComment sid={router.query.studentId} />
          <CommentList sid={router.query.studentId} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const styles = {
  tabPanel: {
    pt: 0,
    overflowY: "scroll",
    height: {
      xs: "85vh",
      sm: "85vh",
      md: "60vh",
    },
  },
};
