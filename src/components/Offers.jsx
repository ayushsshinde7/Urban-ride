import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function Offers() {
  const offers = [
     {
      title: "Women",
      description: "Enjoy 50% off for a safe and comfortable ride",
     bgColor: "linear-gradient(135deg, #c888d2ff, #d2b8d6ff)", // purple gradient
      hoverColor: "linear-gradient(135deg, #e1bee7, #ce93d8)",
    },
    {
      title: "Senior Citizen",
      description: "Get 50% off on your booking",
      
       bgColor: "linear-gradient(135deg, #d8ae6fff, #ffcc80)", // orange gradient
      hoverColor: "linear-gradient(135deg, #ffcc80, #ffb74d)",
    },
   
  ];

  return (
    <Box sx={{ py: 4, background: "#e0f2f1" }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        Offers for you
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {offers.map((offer, index) => (
          <Paper
            key={index}
            sx={{
              p: 2, // reduced padding for less height
              width: 260,
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 3,
              background: offer.bgColor,
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                background: offer.hoverColor,
                transform: "translateY(-5px) scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 0.5, fontWeight: "bold" }}>
              {offer.title}
            </Typography>
            <Typography sx={{ fontSize: "0.9rem" }}>
              {offer.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
