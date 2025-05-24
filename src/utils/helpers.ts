import type { Theme } from "@mui/material";
import type { SxProps } from "@mui/system";

export const sxToArray = (sx?: SxProps<Theme>) => {
  if (Array.isArray(sx)) {
    return sx;
  } else if (typeof sx === "object" && sx !== null) {
    return [sx];
  }
  return [];
};
