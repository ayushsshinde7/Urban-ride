import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="sticky"  // changed here
      sx={{
        background: "linear-gradient(135deg, #0b9284ff)",
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar, // ensure it's above other content
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Home
          </Typography>

          <Typography
            variant="body1"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Help
          </Typography>
        </Box>

        <IconButton>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
