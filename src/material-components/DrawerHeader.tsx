import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { type ReactNode, type SyntheticEvent } from "react";
import Toolbar from "@mui/material/Toolbar";

function a11yProps(index: number) {
  return {
    id: `drawer-tab-${index}`,
    "aria-controls": `drawer-tabpanel-${index}`,
  };
}

interface DrawerHeaderProps {
  tab: number;
  onTabChange: (event: SyntheticEvent, newValue: number) => void;
  children?: ReactNode; // for button or other controls
}

const DrawerHeader = ({ tab, onTabChange, children }: DrawerHeaderProps) => {
  return (
    <Toolbar
      variant={"dense"}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tab}
        onChange={onTabChange}
        aria-label={"Drawer Tabs"}
        variant={"standard"}
        sx={{ height: "100%" }}
      >
        <Tab
          icon={<SmartToyIcon />}
          label={"AI Copilot"}
          {...a11yProps(0)}
          iconPosition={"start"}
          sx={{
            minHeight: "100%",
          }}
          disableRipple
        />
        <Tab label="Details" {...a11yProps(1)} disableRipple />
      </Tabs>
      {children}
    </Toolbar>
  );
};

export default DrawerHeader;
