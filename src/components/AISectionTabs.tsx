"use client";
import { useAppDispatch } from "@/store/hooks";
import { toggleAIChatSidebar } from "@/store/slices/appConfigSlice";
import { gradientForAI } from "@/styles/theme";
import { AutoFixOff } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IconButton, Tab, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import { type SyntheticEvent, useState } from "react";

const AISectionTabs = () => {
  const [value, setValue] = useState("1");
  const dispatch = useAppDispatch();

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Toolbar
        sx={{
          bgcolor: "background.default",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          sx={{
            height: "100%",
          }}
          slotProps={{
            scroller: {
              sx: {
                display: "inline-flex",
                alignItems: "center",
              },
            },
            indicator: {
              sx: {
                bgcolor: "secondary.main",
              },
            },
          }}
        >
          <Tab
            label="Details"
            value="1"
            disableRipple
            sx={{
              fontSize: "large",
            }}
          />
          <Tab
            label={<CopilotGradientText />}
            value="2"
            disableRipple
            sx={{
              fontSize: "large",
            }}
          />
        </TabList>
        <IconButton
          aria-label="close AI drawer"
          onClick={() => dispatch(toggleAIChatSidebar())}
          size={"small"}
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          <AutoFixOff fontSize={"small"} />
        </IconButton>
      </Toolbar>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
    </TabContext>
  );
};

export default AISectionTabs;

const CopilotGradientText = () => {
  return (
    <Box
      component={"span"}
      style={{
        background: gradientForAI,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold",
      }}
    >
      Copilot
    </Box>
  );
};
