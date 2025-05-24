"use client";
import { users as allUsers } from "@/content/users";
import { useState } from "react";
import ChatToolbar from "@/components/chat-toolbar";
import Main from "@/material-components/Main";
import DrawerComponent from "@/material-components/Drawer";
import {
  Divider,
  Typography,
  Box,
  Stack,
  Chip,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Zoom,
} from "@mui/material";
import {
  Chat,
  ExpandMore,
  Bolt,
  Bookmarks,
  InsertEmoticonRounded,
  ExpandMoreRounded,
} from "@mui/icons-material";

interface ConversationProps {
  userID: string;
}

const Conversation = ({ userID }: ConversationProps) => {
  const selectedUser = allUsers.find((u) => u.id === userID)!;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(
    selectedUser.conversation ? [...selectedUser.conversation] : []
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMsg = {
      from: "Me",
      message: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setChatMessages((prev) => [...prev, newMsg]);
    setMessage("");
  };
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ChatToolbar
        userName={selectedUser.name}
        sx={{
          boxShadow: open ? "none" : "none",
          bgcolor: "transparent",
        }}
      />
      <Divider />
      <Main
        open={open}
        sx={{ display: "flex", flexDirection: "column", flex: 1 }}
      >
        <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
          {chatMessages.length === 0 ? (
            <Typography color="text.secondary" textAlign="center" mt={4}>
              No messages yet. Start the conversation!
            </Typography>
          ) : (
            chatMessages.map((msg, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.from === "Me" ? "flex-end" : "flex-start",
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  {msg.from} • {msg.time}
                </Typography>
                <Typography
                  sx={{
                    bgcolor: msg.from === "Me" ? "primary.light" : "grey.200",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    maxWidth: "70%",
                  }}
                >
                  {msg.message}
                </Typography>
              </Box>
            ))
          )}
        </Box>
        <Stack
          boxShadow={"0 0 14px 0 gray"}
          borderRadius={4}
          overflow={"hidden"}
          p={2}
        >
          <Chip
            label={
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={0.5}
                fontWeight={"bold"}
              >
                <Chat fontSize={"small"} color={"inherit"} /> Chat{" "}
                <ExpandMore />
              </Box>
            }
            clickable
            sx={{ width: "fit-content", bgcolor: "transparent" }}
          />
          <TextField
            fullWidth
            multiline
            maxRows={12}
            size={"small"}
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleInputKeyDown}
            variant={"standard"}
            sx={{ padding: 1 }}
            slotProps={{
              input: {
                sx: {
                  "&:before": { display: "none" },
                  "&:after": { display: "none" },
                },
              },
            }}
          />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box sx={{ color: "black", display: "flex", gap: 0.5 }}>
              <Tooltip
                title={"instant reply"}
                arrow
                slots={{ transition: Zoom }}
              >
                <IconButton color={"inherit"}>
                  <Bolt />
                </IconButton>
              </Tooltip>
              <Divider
                variant={"middle"}
                orientation={"vertical"}
                flexItem
                sx={{ borderColor: "black" }}
              />
              <Tooltip title={"bookmarks"} arrow slots={{ transition: Zoom }}>
                <IconButton color={"inherit"}>
                  <Bookmarks />
                </IconButton>
              </Tooltip>
              <Tooltip title={"emojis"} arrow slots={{ transition: Zoom }}>
                <IconButton sx={{ color: "black" }}>
                  <InsertEmoticonRounded />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "black",
                borderRadius: 2,
                color: "white",
              }}
            >
              <Button
                color={"inherit"}
                onClick={handleSendMessage}
                sx={{ fontWeight: 600 }}
              >
                Send
              </Button>
              <Divider
                variant={"middle"}
                sx={{ borderColor: "dimgray" }}
                orientation={"vertical"}
                flexItem
              />
              <IconButton
                color={"inherit"}
                id={"basic-button"}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <ExpandMoreRounded fontSize={"small"} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                transformOrigin={{ horizontal: "center", vertical: "bottom" }}
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Stack>
        </Stack>
      </Main>
    </Box>
  );
};

export default Conversation;
