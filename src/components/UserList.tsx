import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage?: string;
}

interface UserListProps {
  users: User[];
  selectedUserId: string | null;
  onSelectUser: (userId: string) => void;
}

const UserList = (props: UserListProps) => {
  const { users, selectedUserId, onSelectUser } = props;
  return (
    <Box>
      <AppBar
        variant={"elevation"}
        position={"sticky"}
        sx={{
          boxShadow: "none",
          bgcolor: "transparent",
          color: "black",
        }}
      >
        <Toolbar variant={"dense"}>Your Inbox</Toolbar>
      </AppBar>
      <Divider />
      <List
        sx={{
          width: 360,
          borderRight: "1px solid #eee",
          overflowY: "auto",
        }}
      >
        {users.map((user) => (
          <ListItem key={user.id} disablePadding alignItems="flex-start">
            <ListItemButton
              selected={selectedUserId === user.id}
              onClick={() => onSelectUser(user.id)}
              alignItems="flex-start"
            >
              <ListItemAvatar>
                <Avatar src={user.avatarUrl} alt={user.name} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: 220,
                    }}
                  >
                    {user.lastMessage || ""}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;
