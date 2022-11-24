import React from "react";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
type input = {
  label: string;
  placeholder: string;
  type: string;
  onChange: any;
  value: string;
};
export default function SocialInput({
  label,
  placeholder,
  type,
  onChange,
  value,
}: input) {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        width: "100%",
      }}
    >
      <FormControl>
        <Typography className="fs-15">{label}</Typography>
        <OutlinedInput
          value={value}
          type={type}
          sx={{ width: "100%" }}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </FormControl>
    </Stack>
  );
}
