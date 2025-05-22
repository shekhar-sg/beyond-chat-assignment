"use client";
import { useState,KeyboardEvent } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Main from "@/material-components/Main";
import ChatToolbar from "@/components/chat-toolbar";
import UserList, { User } from "@/components/UserList";
import DrawerComponent from "@/material-components/Drawer";
import { Button, Divider, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import {
  Bolt,
  Bookmarks,
  ExpandMoreRounded,
  InsertEmoticonRounded,
} from "@mui/icons-material";
import SplitButton from "@/components/SplitButton";

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
                <TextField
                  fullWidth
                  size="medium"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  variant="standard"
                  slotProps={{
                    input: {
                      sx: {
                        "&:before": {
                          border: "none",
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
                    <IconButton color={"inherit"}>
                      <Bolt />
                    </IconButton>
                    <Divider
                      variant={"middle"}
                      orientation={"vertical"}
                      flexItem
                      sx={{
                        borderColor: "black",
                      }}
                    />
                    <IconButton color={"inherit"}>
                      <Bookmarks />
                    </IconButton>
                    <IconButton
                      sx={{
                        color: "black",
                      }}
                    >
                      <InsertEmoticonRounded />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      // gap: 1,
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
                      // disabled={!message.trim()}
                    >
                      Send
                    </Button>
                    <Divider
                      variant={"middle"}
                      sx={{ borderColor: "dimgray" }}
                      orientation={"vertical"}
                      flexItem
                    />
                    <IconButton color={"inherit"}>
                      <ExpandMoreRounded fontSize={"small"} />
                    </IconButton>
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
