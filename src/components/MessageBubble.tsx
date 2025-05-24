import { Box, Typography } from "@mui/material";

interface MessageBubbleProps {
  from: string;
  message: string;
  time: string;
  isMe: boolean;
}

const MessageBubble = ({ from, message, time, isMe }: MessageBubbleProps) => (
  <Box
    sx={{
      mb: 0.5,
      display: "flex",
      flexDirection: "column",
      alignItems: isMe ? "flex-end" : "flex-start",
      px: 2,
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        gap: 1,
        flexDirection: isMe ? "row-reverse" : "row",
      }}
    >
      <Box
        sx={(theme) => {
          const bgcolor = isMe
            ? theme.palette.primary.main
            : theme.palette.common.white;
          return {
            bgcolor,
            color: theme.palette.getContrastText(bgcolor),
            px: 2,
            py: 1.2,
            borderRadius: isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
            maxWidth: { xs: "90vw", sm: "60vw" },
            fontSize: 15,
            boxShadow: isMe ? "0 2px 8px 0 #005ff91a" : "0 2px 8px 0 #0001",
            transition: "background 0.2s",
            minWidth: 40,
            wordBreak: "break-word",
          };
        }}
      >
        {message}
      </Box>
    </Box>
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{
        mt: 0.5,
        fontWeight: 400,
        fontSize: 12,
        textAlign: isMe ? "right" : "left",
        opacity: 0.7,
      }}
    >
      {isMe ? "You" : from} • {time}
    </Typography>
  </Box>
);

export default MessageBubble;
