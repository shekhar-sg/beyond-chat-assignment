"use client";
import UserList from "@/components/UserList";
import { users } from "@/content/users";
import { useAppSelector } from "@/store/hooks";
import {
  Paper,
  type PaperProps,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const isAIChatSidebarOpen = useAppSelector(
    ({ appConfig }) => appConfig.isAIChatSidebarOpen
  );
  return (
    <Stack
      direction={"row"}
      height="100vh"
      width="100vw"
      overflow="hidden"
      gap={1}
      p={1}
    >
      <Paper
        variant={"outlined"}
        sx={{
          width: 360,
          border: 1,
          borderColor: "divider",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>
          <Typography variant="h6" component="div" fontWeight={"bold"}>
            Your Inbox
          </Typography>
        </Toolbar>
        <UserList users={users} />
      </Paper>
      <PaperForMain
        isAIChatSidebarOpen={isAIChatSidebarOpen}
        variant={"outlined"}
        sx={{
          border: 1,
          borderColor: "divider",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          flexShrink: 0,
          // marginRight: "0", // Adjust for the width of the AI chat drawer and padding
        }}
      >
        {children}
      </PaperForMain>
      <PaperForAIChat
        isAIChatSidebarOpen={isAIChatSidebarOpen}
        variant={"outlined"}
        sx={{
          width: 440,
          border: 1,
          borderColor: "divider",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
          // marginRight: "-448px",
        }}
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>
          AI Chatbot Help
        </Toolbar>
        {/* Place your AI help/chatbot component here */}
      </PaperForAIChat>
    </Stack>
  );
}

const drawerWidth = 440;

interface CustomPaperProps extends PaperProps {
  isAIChatSidebarOpen: boolean;
}

const PaperForMain = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isAIChatSidebarOpen",
})<CustomPaperProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: 0, // Adjust for the width of the AI chat drawer
  variants: [
    {
      props: ({ isAIChatSidebarOpen }) => isAIChatSidebarOpen,
      style: {
        transition: theme.transitions.create(["margin"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}));

const PaperForAIChat = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isAIChatSidebarOpen",
})<CustomPaperProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -(drawerWidth + 8),
  variants: [
    {
      props: ({ isAIChatSidebarOpen }) => isAIChatSidebarOpen,
      style: {
        transition: theme.transitions.create(["margin"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}));
