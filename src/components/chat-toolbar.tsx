import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleThemeMode } from "@/store/slices/appConfigSlice";
import { sxToArray } from "@/utils/helpers";
import { AutoFixHigh, Inbox, MoreHoriz } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Chip } from "@mui/material";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

interface AppBarProps extends MuiAppBarProps {
  userName: string;
}

const drawerWidth = 440;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isAIChatSidebarOpen",
})<{ isAIChatSidebarOpen: boolean }>(({ theme, isAIChatSidebarOpen }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isAIChatSidebarOpen && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

function ChatToolbar(props: AppBarProps) {
  const { userName, ...rest } = props;
  const isAIChatSidebarOpen = useAppSelector(
    ({ appConfig }) => appConfig.isAIChatSidebarOpen
  ); // Replace with actual state if needed
  const dispatch = useAppDispatch(); // Replace with actual state if needed
  return (
    <AppBar
      isAIChatSidebarOpen={isAIChatSidebarOpen}
      position={"sticky"}
      color={"default"}
      elevation={0}
      {...rest}
      sx={[
        {
          bgcolor: "transparent",
        },
        ...sxToArray(rest.sx),
      ]}
    >
      <Toolbar sx={{ gap: 1.5 }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {userName}
        </Typography>
        {/* Theme Toggle Button */}
        <IconButton color="inherit" aria-label="toggle theme" size={"small"}>
          <MoreHoriz fontSize={"small"} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="toggle theme"
          onClick={() => dispatch(toggleThemeMode())}
          size={"small"}
        >
          <Brightness4Icon fontSize={"small"} />
        </IconButton>
        {/* Close Chat Button */}
        <Chip
          component={Link}
          href={"/"}
          disabled={!userName}
          sx={{
            bgcolor: "text.primary",
            padding: 0.8,
            color: "background.default",
            fontWeight: "bold",
          }}
          icon={<Inbox fontSize={"small"} color={"inherit"} />}
          label={"Close"}
          variant={"filled"}
        />
        {/* Ai copilot Button */}
        {!isAIChatSidebarOpen && (
          <IconButton
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            size={"small"}
            sx={{
              backgroundImage:
                "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
              color: "common.white",
            }}
          >
            <AutoFixHigh fontSize={"small"} />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default ChatToolbar;
