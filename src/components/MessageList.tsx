import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

interface Message {
  from: string;
  message: string;
  time: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",
        pt: 3,
        pb: 2,
        display: "flex",
        flexDirection: "column",
        gap: 0,
        scrollbarWidth: "none",
      }}
    >
      {messages.length === 0 ? (
        <Typography color="text.secondary" textAlign="center" mt={4}>
          No messages yet. Start the conversation!
        </Typography>
      ) : (
        messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            from={msg.from}
            message={msg.message}
            time={msg.time}
            isMe={msg.from === "Me"}
          />
        ))
      )}
      <div ref={bottomRef} />
    </Box>
  );
};

export default MessageList;
