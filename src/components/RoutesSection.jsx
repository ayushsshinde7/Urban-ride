import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";

export default function RoutesSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #21877dff)",
        padding: "2rem 1rem",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          mb: 3,
          fontWeight: "bold",
          fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
        }}
      >
        Where do you want to go?
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" }, // stack vertically on mobile, row on tablet+
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#004d40",
            "&:hover": { backgroundColor: "#00332d" },
            width: { xs: "100%", sm: "auto" }, // full width on mobile
          }}
        >
          Pune → Nashik
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#004d40",
            "&:hover": { backgroundColor: "#00332d" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          Nashik → Pune
        </Button>
      </Box>

      <Link
        href="/popular-rides"
        underline="hover"
        sx={{
          display: "block",
          mt: 3,
          color: "#edf0eb92",
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
      >
        See our most popular rides
      </Link>
    </section>
  );
}
