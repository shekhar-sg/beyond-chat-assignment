import AISectionTabs from "@/components/AISectionTabs";
import PaperForAISection from "@/components/PaperForAISection";
import UserList from "@/components/UserList";
import { users } from "@/content/users";
import { Paper, Stack, Toolbar, Typography } from "@mui/material";
import type { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
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
      <Paper
        variant={"outlined"}
        sx={{
          border: 1,
          borderColor: "divider",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {children}
      </Paper>
      <PaperForAISection
        variant={"outlined"}
        sx={{
          width: 440,
          border: 1,
          borderColor: "divider",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <AISectionTabs />
      </PaperForAISection>
    </Stack>
  );
}
