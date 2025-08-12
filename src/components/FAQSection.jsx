import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQSection() {
  const [tab, setTab] = useState(0);

  const faqCategories = [
    {
      label: "General",
      questions: [
        "Can I track the location of my booked cab online?",
        "What are the advantages of booking a cab with TTI Urdin Ride?",
        "Why book cabs online with TTI Urdin Ride?",
        "Do I need to create an account to book a cab?",
        "Does booking online cost more?",
        "How can I get discounts on cab bookings?",
        "What's new in cab booking on TTI Urdin Ride?",
        "Can I book outstation or long-distance rides?",
      ],
    },
    {
      label: "Ticket-related",
      questions: ["Sample ticket question 1", "Sample ticket question 2"],
    },
    {
      label: "Payment",
      questions: ["Sample payment question 1", "Sample payment question 2"],
    },
    {
      label: "Cancellation & Refund",
      questions: ["Sample cancellation question 1", "Sample cancellation question 2"],
    },
  ];

  return (
    <Box sx={{ background: "#e0f2f1", py: 4 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 3,
          fontWeight: "bold",
          color: "#004d40",
        }}
      >
        FAQs related to Bus Tickets Booking
      </Typography>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        centered
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          mb: 3,
          "& .MuiTab-root": { fontWeight: "bold" },
          "& .Mui-selected": { color: "#00b3a1 !important" },
          "& .MuiTabs-indicator": { backgroundColor: "#00b3a1" },
        }}
      >
        {faqCategories.map((cat, i) => (
          <Tab key={i} label={cat.label} />
        ))}
      </Tabs>

      {/* FAQ List */}
      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        {faqCategories[tab].questions.map((q, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2, // Gap between questions
              borderRadius: 2,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#ffffff",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0px 6px 16px rgba(0,0,0,0.2)",
              },
              "&:before": { display: "none" }, // Removes default MUI divider line
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#00b3a1" }} />}>
              <Typography sx={{ fontWeight: 500 }}>{q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555" }}>
                This is the answer to: "{q}". You can replace this text with the actual FAQ content.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
