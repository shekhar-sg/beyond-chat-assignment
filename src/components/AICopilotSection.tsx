import { ArrowUpward } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { type KeyboardEvent, useRef, useState } from "react";

const AICopilotSection = () => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSend = () => {
    console.log("handleSend called with -> ", message);
    setMessage("");
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <Box
      sx={{
        height: "100%",
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant={"h2"} gutterBottom>
          AI Copilot
        </Typography>
        <Typography variant={"body1"}>
          The AI Copilot assists you in various tasks, providing suggestions and
          automating repetitive actions. It learns from your interactions to
          improve its responses over time.
        </Typography>
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Ask a follow-up question..."
        sx={{ mt: "auto" }}
        inputRef={inputRef}
        value={message}
        onKeyDown={handleInputKeyDown}
        onChange={(e) => setMessage(e.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position={"end"}>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => {
                    handleSend();
                  }}
                >
                  <ArrowUpward fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default AICopilotSection;
