import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, TabList } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";
import MostTab from "./MostTab";
import { useQuery } from "@tanstack/react-query";
import { getInitMosts } from "../../api/mosts-api";
import CustomError from "../SharedComponents/Elements/CustomError";

const DUMMY_NAMES1 = ["محمد علی محمدی", "محمد علی محمدی", "محمد علی محمدی"];
const DUMMY_NAMES2 = ["علی نوروزی", "علی نوروزی", "علی نوروزی"];
const DUMMY_NAMES3 = ["محمدحمدی", "محمد  محمدی", "محمد  محمدی"];

export default function MostsList() {
  const [tabContent, setTabContent] = useState("1");

  // ONLINE - remove this return
  return (
    <>
      <Box sx={{ width: "100%", my: 5 }}>
        <TabContext value={tabContent}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(e, newValue) => setTabContent(newValue)}
              aria-label="Mosts"
            >
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

  const { data, isLoading, error } = useQuery(["mosts"], getInitMosts);

  if (isLoading) return <div>Spinner</div>;
  if (error) return <CustomError errorMessage={error.message} />;

  if (data) {
    return (
      <>
        <Box sx={{ width: "100%", my: 5 }}>
          <TabContext value={tabContent}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={(e, newValue) => setTabContent(newValue)}
                aria-label="Mosts"
              >
                {data.map((el, i) => (
                  <Tab label={el.name} value={i + 1} key={i} />
                ))}
              </TabList>
            </Box>

            {data.map((el, i) => (
              <TabPanel value={i + 1} key={i}>
                <MostTab key={i} id={el.id} />
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </>
    );
  }
}
