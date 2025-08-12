import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box sx={{ background: "#e0f2f1", py: 3, textAlign: "center" }}>
      <Box sx={{ mb: 1 }}>
        <Link href="#" sx={{ mx: 2 }}>About</Link>
        <Link href="#" sx={{ mx: 2 }}>Terms</Link>
        <Link href="#" sx={{ mx: 2 }}>Privacy</Link>
        <Link href="#" sx={{ mx: 2 }}>Contact</Link>
      </Box>

      <Box>
        <IconButton color="primary"><FacebookIcon /></IconButton>
        <IconButton color="primary"><LinkedInIcon /></IconButton>
        <IconButton color="primary"><CloseIcon /></IconButton>
        <IconButton color="primary"><InstagramIcon /></IconButton>
      </Box>
    </Box>
  );
}
