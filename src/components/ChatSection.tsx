"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Main from "@/material-components/Main";
import ChatToolbar from "@/components/chat-toolbar";
import Toolbar from "@mui/material/Toolbar";
import UserList, { User } from "@/components/UserList";
import DrawerComponent from "@/material-components/Drawer";
import { Divider } from "@mui/material";

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Handler for closing the chat (deselect user)
  const handleCloseChat = () => setSelectedUserId(null);
  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* User List Section */}
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        onSelectUser={setSelectedUserId}
      />
      <Divider orientation={"vertical"}/>
      {/* Chat Section */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/*<Navbar open={open} handleDrawerOpen={handleDrawerOpen} />*/}
          <ChatToolbar
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
        <Divider/>
        <Main open={open}>
          {selectedUser ? (
            <>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Chat with {selectedUser.name}
              </Typography>
              {/* Replace below with actual chat messages for selectedUser */}
              <Typography sx={{ marginBottom: 2 }}>
                This is the chat area for {selectedUser.name}.
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>

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
