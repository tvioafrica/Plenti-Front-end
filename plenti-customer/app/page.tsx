"use client";
import * as React from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineStar } from 'react-icons/ai';
import Cashback from "./Components/Cashback";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <h2 className="m-[1rem] text-[#818080]">
        Good Day ,<span className="font-bold text-black"> Romeoscript</span>
      </h2>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{ background: "white", color: "black" }}
            TabIndicatorProps={{ style: {  margin:'0 auto' , background:'grey'} }} // Custom indicator height
          >
            <Tab label="Cash back" {...a11yProps(0)} />
            <Tab
            
              label={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineStar style={{ marginRight: "0.5rem" }} /> Item Two
                </div>
              }
            // Add an icon to the second tab
              {...a11yProps(1)}
            />
            <Tab label="Plenti credit" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Cashback />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}
