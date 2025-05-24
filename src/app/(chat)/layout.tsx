"use client";

import AISectionTabs from "@/components/AISectionTabs";
import PaperForAISection from "@/components/PaperForAISection";
import UserList from "@/components/UserList";
import { users } from "@/content/users";
import {
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isConversationPage = pathname.startsWith("/conversation/");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Stack
      direction={"row"}
      height="100vh"
      width="100vw"
      overflow="hidden"
      gap={1}
      p={{
        xs: 0,
        md: 1,
      }}
      position={"relative"}
    >
      <Paper
        variant={"outlined"}
        sx={{
          width: {
            xs: "100%",
            md: 400,
          },
          border: 1,
          borderColor: "divider",
          overflow: "hidden",
          display:
            isMobile && !isConversationPage
              ? "flex"
              : !isMobile
                ? "flex"
                : "none",
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
          display: isMobile && !isConversationPage ? "none" : "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {children}
      </Paper>
      <PaperForAISection
        variant={"outlined"}
        sx={{
          width: {
            xs: "100%",
            md: 440,
          },
          border: 1,
          borderColor: "divider",
          overflowY: "auto",
          flexDirection: "column",
          boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <AISectionTabs />
      </PaperForAISection>
    </Stack>
  );
}
