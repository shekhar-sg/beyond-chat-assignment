import React from "react";
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import CloseIcon from "@mui/icons-material/Close";

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
  const { open, handleDrawerOpen, userName, onThemeToggle, onCloseChat, ...rest } = props;
  return (
    <AppBar open={open} {...rest}>
      <Toolbar variant={"dense"} sx={{ gap: 2 }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {userName ? `Chat with ${userName}` : "No User Selected"}
        </Typography>
        {/* Menu Button */}
        <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        {/* Theme Toggle Button */}
        <IconButton color="inherit" aria-label="toggle theme" edge="end" onClick={onThemeToggle}>
          <Brightness4Icon />
        </IconButton>
        {/* Close Chat Button */}
        <IconButton color="inherit" aria-label="close chat" edge="end" onClick={onCloseChat} disabled={!userName}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default ChatToolbar;
