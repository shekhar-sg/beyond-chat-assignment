import Box from "@mui/material/Box";
import type { ReactNode } from "react";

interface DrawerTabPanelProps {
  children?: ReactNode;
  value: number;
  index: number;
}

const DrawerTabPanel = (props: DrawerTabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`drawer-tabpanel-${index}`}
      aria-labelledby={`drawer-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2, width: "100%" }}>{children}</Box>}
    </div>
  );
};

export default DrawerTabPanel;
