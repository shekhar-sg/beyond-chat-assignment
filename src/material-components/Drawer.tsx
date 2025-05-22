import { type SyntheticEvent, useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import DrawerHeader from "./DrawerHeader";
import Box from "@mui/material/Box";
import DrawerTabPanel from "@/components/DrawerTabPanel";
import { Divider } from "@mui/material";

const drawerWidth = 440;

interface DrawerComponentProps {
  open: boolean;
  handleDrawerClose: () => void;
}

const DrawerComponent = (props: DrawerComponentProps) => {
  const { open, handleDrawerClose } = props;
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader tab={tab} onTabChange={handleTabChange}>
        <IconButton onClick={handleDrawerClose} sx={{ marginLeft: 1 }}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box sx={{ width: "100%" }}>
        <DrawerTabPanel value={tab} index={0}>
          {/* AI Copilot panel content here */}
          AI Copilot content goes here.
        </DrawerTabPanel>
        <DrawerTabPanel value={tab} index={1}>
          {/* Details panel content here */}
          Details content goes here.
        </DrawerTabPanel>
      </Box>
    </Drawer>
  );
};
export default DrawerComponent;


