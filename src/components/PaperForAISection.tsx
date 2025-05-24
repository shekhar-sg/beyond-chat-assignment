"use client";

import { useAppSelector } from "@/store/hooks";
import { sxToArray } from "@/utils/helpers";
import { Paper, type PaperProps } from "@mui/material";

const drawerWidth = 440;

const PaperForAISection = (props: PaperProps) => {
  const isAIChatSidebarOpen = useAppSelector(
    ({ appConfig }) => appConfig.isAIChatSidebarOpen
  );
  return (
    <Paper
      {...props}
      sx={[
        (theme) =>
          isAIChatSidebarOpen
            ? {
                transition: theme.transitions.create(["margin"], {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                marginRight: 0,
              }
            : {
                transition: theme.transitions.create(["margin"], {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                marginRight: `-${drawerWidth + 8}px`,
              },
        ...sxToArray(props?.sx),
      ]}
    />
  );
};

export default PaperForAISection;
