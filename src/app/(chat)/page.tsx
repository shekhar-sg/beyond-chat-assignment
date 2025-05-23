import { Box, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function ChatPage() {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      minHeight={0}
      sx={{ bgcolor: 'background.default' }}
    >
      <ChatBubbleOutlineIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
      <Typography variant="h5" color="text.secondary" fontWeight={500} gutterBottom>
        No conversation selected
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Select a user from the left to start chatting.
      </Typography>
    </Box>
  );
}

