"use client";
import ChatToolbar from "@/components/ChatToolbar";
import { users as allUsers } from "@/content/users";
import { Box, Divider, Stack } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      <ChatToolbar userName={selectedUser.name} />
      <Divider />
      <Stack
        flexGrow={1}
        p={2}
        sx={{
          height: (theme) => `calc(100vh - ${theme.spacing(10)})`,
          overflow: "hidden",
        }}
      >
        <MessageList messages={chatMessages} />
        <MessageInput onSend={handleSendMessage} />
      </Stack>
    </Box>
  );
};

export default Conversation;
