import React from "react";
import MuiAppBar, {
  type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { AutoFixHigh, Inbox, MoreHoriz } from "@mui/icons-material";
import { Button, Chip } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  userName?: string;
  onThemeToggle?: () => void;
  onCloseChat?: () => void;
  handleDrawerOpen?: () => void;
}

const drawerWidth = 440;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

function ChatToolbar(props: AppBarProps) {
  const {
    open,
    handleDrawerOpen,
    userName,
    onThemeToggle,
    onCloseChat,
    ...rest
  } = props;
  return (
    <AppBar open={open} {...rest}>
      <Toolbar variant={"dense"} sx={{ gap: 1.5 }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {userName ? `Chat with ${userName}` : "No User Selected"}
        </Typography>
        {/* Theme Toggle Button */}
        <IconButton
          color="inherit"
          aria-label="toggle theme"
          edge="end"
          onClick={onThemeToggle}
          sx={{ bgcolor: "grey.200", padding: 0.8 }}
          size={"small"}
        >
          <MoreHoriz fontSize={"small"} />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="toggle theme"
          edge="end"
          onClick={onThemeToggle}
          sx={{ bgcolor: "grey.200", padding: 0.8 }}
          size={"small"}
        >
          <Brightness4Icon fontSize={"small"} />
        </IconButton>
        {/* Close Chat Button */}
        <Chip
          component={Button}
          onClick={onCloseChat}
          disabled={!userName}
          sx={{
            bgcolor: "black",
            padding: 0.8,
            color: "white",
            fontWeight: "bold",
          }}
          icon={<Inbox fontSize={"small"} color={"inherit"} />}
          label={"Close"}
          variant={"filled"}
        />
        {/* Ai copilot Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{
            bgcolor: "grey.200",
            padding: 0.8,
            display: open ? "none" : "flex",
          }}
          size={"small"}
        >
          <AutoFixHigh fontSize={"small"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ChatToolbar;
