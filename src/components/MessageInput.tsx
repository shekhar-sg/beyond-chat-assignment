import { useState, useRef } from "react";
import { Box, Button, IconButton, Menu, MenuItem, Stack, TextField, Tooltip, Zoom, Typography } from "@mui/material";
import { Bolt, Bookmarks, InsertEmoticonRounded, ExpandMoreRounded } from "@mui/icons-material";
import EmojiPicker from 'emoji-picker-react';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface MessageInputProps {
  onSend: (msg: string) => void;
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const openMenu = Boolean(anchorEl);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!message.trim() && files.length === 0) return;
    onSend(message.trim());
    setMessage("");
    setFiles([]);
    inputRef.current?.focus();
  };
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleEmojiClick = () => setShowEmojiPicker((prev) => !prev);
  const handleEmojiSelect = (emojiData: any) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
    inputRef.current?.focus();
  };
  const handleAttachClick = () => fileInputRef.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };
  const handleRemoveFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
        borderTop: '1px solid #e6e8eb',
        px: { xs: 1, sm: 3 },
        py: 2,
        position: 'sticky',
        bottom: 0,
        zIndex: 2,
        boxShadow: '0 -2px 8px 0 #0001',
      }}
    >
      {showEmojiPicker && (
        <Box sx={{ position: 'absolute', bottom: 70, right: 80, zIndex: 10 }}>
          <EmojiPicker onEmojiClick={handleEmojiSelect} theme="light" />
        </Box>
      )}
      <Stack direction="row" alignItems="center" gap={1}>
        <IconButton sx={{ color: "#b0b3b9" }} onClick={handleAttachClick}>
          <AttachFileIcon />
        </IconButton>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          hidden
          onChange={handleFileChange}
        />
        <TextField
          fullWidth
          multiline
          maxRows={6}
          size={"small"}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleInputKeyDown}
          variant={"outlined"}
          inputRef={inputRef}
          sx={{
            bgcolor: '#f7f8fa',
            borderRadius: 3,
            '& .MuiInputBase-root': { fontSize: 15, bgcolor: 'transparent' },
            flex: 1,
            boxShadow: 'none',
            border: 'none',
          }}
          InputProps={{
            disableUnderline: true,
            sx: { p: 1.2, border: 'none' },
          }}
        />
        <Tooltip title={"Emojis"} arrow slots={{ transition: Zoom }}>
          <IconButton sx={{ color: "#b0b3b9" }} onClick={handleEmojiClick}>
            <InsertEmoticonRounded />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Bookmarks"} arrow slots={{ transition: Zoom }}>
          <IconButton sx={{ color: "#b0b3b9" }}><Bookmarks /></IconButton>
        </Tooltip>
        <Tooltip title={"Instant reply"} arrow slots={{ transition: Zoom }}>
          <IconButton sx={{ color: "#b0b3b9" }}><Bolt /></IconButton>
        </Tooltip>
        <Button
          color={"primary"}
          variant="contained"
          onClick={handleSend}
          sx={{ fontWeight: 600, borderRadius: 2, minWidth: 48, minHeight: 48, boxShadow: 1, textTransform: 'none', fontSize: 16 }}
          disabled={!message.trim() && files.length === 0}
        >
          Send
        </Button>
        <IconButton color={"inherit"} id={"basic-button"} aria-controls={openMenu ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={openMenu ? "true" : undefined} onClick={handleClick}>
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
      </Stack>
      {files.length > 0 && (
        <Stack direction="row" gap={1} mt={1} flexWrap="wrap">
          {files.map((file, idx) => (
            <Box key={idx} sx={{ bgcolor: '#f7f8fa', px: 2, py: 1, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography fontSize={13}>{file.name}</Typography>
              <Button size="small" color="error" onClick={() => handleRemoveFile(idx)} sx={{ minWidth: 0, px: 1 }}>x</Button>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default MessageInput;
