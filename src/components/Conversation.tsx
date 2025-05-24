"use client";
import ChatToolbar from "@/components/chat-toolbar";
import { users as allUsers } from "@/content/users";
import { useAppSelector } from "@/store/hooks";
import { Box, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

interface ConversationProps {
  userID: string;
}

const Conversation = ({ userID }: ConversationProps) => {
  const selectedUser = allUsers.find((u) => u.id === userID)!;
  const [chatMessages, setChatMessages] = useState(
    selectedUser.conversation ? [...selectedUser.conversation] : []
  );
  const isAIChatSidebarOpen = useAppSelector(
    ({ appConfig }) => appConfig.isAIChatSidebarOpen
  );

  const handleSendMessage = (msg: string) => {
    const newMsg = {
      from: "Me",
      message: msg,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setChatMessages((prev) => [...prev, newMsg]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ChatToolbar userName={selectedUser.name} />
      <Divider />
      <Main open={isAIChatSidebarOpen}>
        <MessageList messages={chatMessages} />
        <MessageInput onSend={handleSendMessage} />
      </Main>
    </Box>
  );
};

export default Conversation;

const drawerWidth = 440;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // marginRight: -drawerWidth,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
  position: "relative",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      },
    },
  ],
}));
