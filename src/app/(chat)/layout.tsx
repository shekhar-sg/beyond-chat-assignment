import UserList from "@/components/UserList";
import { users } from "@/content/users";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Box, Divider, Paper } from "@mui/material";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box display="flex" height="100vh" width="100vw" overflow="hidden">
      {/* Left: User List */}
      <Paper
        elevation={0}
        sx={{
          width: 360,
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        square
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>Your Inbox</Toolbar>
        <UserList users={users} />
      </Paper>
      <Divider orientation="vertical" flexItem />
      {/* Center: Chat Section */}
      <Box flex={1} display="flex" flexDirection="column" minWidth={0}>
        {children}
      </Box>
      <Divider orientation="vertical" flexItem />
      {/* Right: AI Chatbot Help */}
      <Paper
        elevation={0}
        sx={{
          width: 340,
          borderLeft: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        square
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>
          AI Chatbot Help
        </Toolbar>
        {/* Place your AI help/chatbot component here */}
      </Paper>
    </Box>
  );
}
