import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const AIDetailsSection = () => {
  return (
    <Box>
      <Typography variant={"h2"} gutterBottom>
        Details
      </Typography>
      <Typography variant={"body1"} gutterBottom>
        This section provides detailed information about the AI model, its
        capabilities, and limitations. You can expand each section to learn more
        about how the AI works and what it can do.
      </Typography>
      <Typography variant={"body1"} sx={{ mb: 4, color: "text.secondary" }}>
        The AI model is designed to assist with a variety of tasks, including
        answering questions, providing recommendations, and generating content.
        It is continuously updated to improve its performance and accuracy.
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>AI Model</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Model: GPT-4 Turbo
            <br />
            Parameters: 175B
            <br />
            Release: 2024
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Capabilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - Natural language understanding
            <br />
            - Contextual conversation
            <br />
            - Code generation
            <br />- Summarization
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Limitations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            - May generate incorrect information
            <br />
            - Limited knowledge after June 2024
            <br />- Can misunderstand ambiguous queries
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AIDetailsSection;
