"use client";
import ChatToolbar from "@/components/chat-toolbar";
import UserList, { User } from "@/components/UserList";
import DrawerComponent from "@/material-components/Drawer";
import Main from "@/material-components/Main";
import {
  Bolt,
  Bookmarks,
  Chat,
  ExpandMore,
  ExpandMoreRounded,
  InsertEmoticonRounded,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Zoom,
} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { KeyboardEvent, useState } from "react";

export default function ChatSection() {
  const [open, setOpen] = useState(false);
  // Example users (replace with real data as needed)
  const [users] = useState<User[]>([
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" },
  ]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(
    users[0]?.id || null
  );
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<{
    [userId: string]: string[];
  }>({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSendMessage = () => {
    if (!selectedUserId || !message.trim()) return;
    setChatMessages((prev) => ({
      ...prev,
      [selectedUserId]: [...(prev[selectedUserId] || []), message.trim()],
    }));
    setMessage("");
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const selectedUser = users.find((u) => u.id === selectedUserId);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* User List Section */}
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={setSelectedUserId}
      />
      <Divider orientation={"vertical"} />
      {/* Chat Section */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ChatToolbar
          userName={selectedUser?.name}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          variant={"elevation"}
          position={"sticky"}
          sx={{
            boxShadow: open ? "none" : "none",
            bgcolor: "transparent",
            color: "black",
          }}
        />
        <Divider />
        <Main
          open={open}
          sx={{ display: "flex", flexDirection: "column", flex: 1 }}
        >
          {selectedUser ? (
            <>
              <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
                {(chatMessages[selectedUser.id] || []).map((msg, idx) => (
                  <Typography key={idx} sx={{ mb: 1 }}>
                    {msg}
                  </Typography>
                ))}
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
                      <Chat fontSize={"small"} color={"inherit"} />
                      Chat <ExpandMore />
                    </Box>
                  }
                  clickable
                  sx={{
                    width: "fit-content",
                    bgcolor: "transparent",
                  }}
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
                  sx={{
                    padding: 1,
                  }}
                  slotProps={{
                    input: {
                      sx: {
                        "&:before": {
                          display: "none",
                        },
                        "&:after": {
                          display: "none",
                        },
                      },
                    },
                  }}
                />
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box
                    sx={{
                      color: "black",
                      display: "flex",
                      gap: 0.5,
                    }}
                  >
                    <Tooltip
                      title={"instant reply"}
                      arrow
                      slots={{
                        transition: Zoom,
                      }}
                    >
                      <IconButton color={"inherit"}>
                        <Bolt />
                      </IconButton>
                    </Tooltip>
                    <Divider
                      variant={"middle"}
                      orientation={"vertical"}
                      flexItem
                      sx={{
                        borderColor: "black",
                      }}
                    />
                    <Tooltip
                      title={"bookmarks"}
                      arrow
                      slots={{
                        transition: Zoom,
                      }}
                    >
                      <IconButton color={"inherit"}>
                        <Bookmarks />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title={"emojis"}
                      arrow
                      slots={{
                        transition: Zoom,
                      }}
                    >
                      <IconButton
                        sx={{
                          color: "black",
                        }}
                      >
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
                      sx={{
                        fontWeight: 600,
                      }}
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
                      transformOrigin={{
                        horizontal: "center",
                        vertical: "bottom",
                      }}
                      anchorOrigin={{ horizontal: "left", vertical: "top" }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </Box>
                </Stack>
              </Stack>
            </>
          ) : (
            <Typography>Select a user to start chatting.</Typography>
          )}
        </Main>
        <DrawerComponent open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
      {/* Right Drawer - togglable */}
    </Box>
  );
}
