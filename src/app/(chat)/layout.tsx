import UserList from "@/components/UserList";
import { users } from "@/content/users";
import { Paper, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack
      direction={"row"}
      height="100vh"
      width="100vw"
      overflow="hidden"
      gap={1}
      p={1}
    >
      {/* Left: User List */}
      <Paper
        elevation={2}
        sx={{
          width: 360,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        // square
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>Your Inbox</Toolbar>
        <UserList users={users} />
      </Paper>
      {/*<Divider orientation="vertical" flexItem />*/}
      {/* Center: Chat Section */}
      <Paper
        elevation={2}
        sx={{
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {children}
      </Paper>
      {/*<Divider orientation="vertical" flexItem />*/}
      {/* Right: AI Chatbot Help */}
      <Paper
        elevation={2}
        sx={{
          width: 340,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        // square
      >
        <Toolbar sx={{ bgcolor: "background.default" }}>
          AI Chatbot Help
        </Toolbar>
        {/* Place your AI help/chatbot component here */}
      </Paper>
    </Stack>
  );
}
