import {
  Bolt,
  Bookmarks,
  ExpandMoreRounded,
  InsertEmoticonRounded,
} from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import {
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
  useRef,
  useState,
} from "react";

interface MessageInputProps {
  onSend: (msg: string) => void;
}

const MessageInput = ({ onSend }: MessageInputProps) => {
  const [message, setMessage] = useState("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const openMenu = Boolean(anchorEl);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [emojiAnchorEl, setEmojiAnchorEl] = useState<HTMLButtonElement | null>(
    null
  );

  const handleEmojiClick = (event: MouseEvent<HTMLButtonElement>) => {
    setEmojiAnchorEl(event.currentTarget);
  };

  const handleEmojiClose = () => {
    setEmojiAnchorEl(null);
  };

  const open = Boolean(emojiAnchorEl);

  const handleSend = () => {
    if (!message.trim() && files.length === 0) return;
    onSend(message.trim());
    setMessage("");
    setFiles([]);
    inputRef.current?.focus();
  };
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleEmojiSelect = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
    inputRef.current?.focus();
  };
  const handleAttachClick = () => fileInputRef.current?.click();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        width: "100%",
        bgcolor: "#fff",
        borderTop: "1px solid #e6e8eb",
        px: { xs: 1, sm: 3 },
        py: 2,
        position: "sticky",
        bottom: 0,
        zIndex: 2,
        boxShadow: "0 -2px 8px 0 #0001",
      }}
    >
      <Stack direction="column" gap={1}>
        <TextField
          fullWidth
          multiline
          maxRows={6}
          size={"small"}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleInputKeyDown}
          variant={"standard"}
          inputRef={inputRef}
          sx={{
            flex: 1,
            px: 2,
            py: 1,
          }}
          slotProps={{
            input: {
              disableUnderline: true,
              sx: { p: 0, border: "none", boxShadow: "none" },
            },
          }}
        />
        <Stack direction="row" alignItems="center" gap={1}>
          <Tooltip
            title={"Attach files"}
            followCursor
            arrow
            slots={{ transition: Zoom }}
          >
            <IconButton color={"info"} onClick={handleAttachClick}>
              <AttachFileIcon />
            </IconButton>
          </Tooltip>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            hidden
            onChange={handleFileChange}
          />
          <Tooltip
            title={"Emojis"}
            followCursor
            arrow
            slots={{ transition: Zoom }}
          >
            <IconButton color={"warning"} onClick={handleEmojiClick}>
              <InsertEmoticonRounded />
            </IconButton>
          </Tooltip>
          <Popover
            open={open}
            anchorEl={emojiAnchorEl}
            onClose={handleEmojiClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </Popover>
          <Tooltip
            title={"Bookmarks"}
            followCursor
            arrow
            slots={{ transition: Zoom }}
          >
            <IconButton color={"success"}>
              <Bookmarks />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={"Instant reply"}
            followCursor
            arrow
            slots={{ transition: Zoom }}
          >
            <IconButton color={"error"}>
              <Bolt />
            </IconButton>
          </Tooltip>
          <Box flex={1} />
          <Button
            color={"primary"}
            variant="contained"
            onClick={handleSend}
            sx={{
              fontWeight: 600,
              borderRadius: 2,
              minWidth: 48,
              minHeight: 48,
              boxShadow: 1,
              textTransform: "none",
              fontSize: 16,
            }}
            disabled={!message.trim() && files.length === 0}
          >
            Send
          </Button>
          <IconButton
            color={"inherit"}
            id={"basic-button"}
            aria-controls={openMenu ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
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
            <MenuItem onClick={handleClose}>Schedule</MenuItem>
            <MenuItem onClick={handleClose}>Add Timer</MenuItem>
          </Menu>
        </Stack>
        {files.length > 0 && (
          <Stack direction="row" gap={1} mt={1} flexWrap="wrap">
            {files.map((file, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor: "#f7f8fa",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography fontSize={13}>{file.name}</Typography>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleRemoveFile(idx)}
                  sx={{ minWidth: 0, px: 1 }}
                >
                  x
                </Button>
              </Box>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default MessageInput;
