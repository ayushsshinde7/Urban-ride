import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function SearchBar({
  onSearch,
  sticky = false,
  showBack = false,
  onBack,
  initialFrom = "",
  initialTo = "",
  initialDate = new Date(),
  initialOption = null,
}) {
  // Use props as initial states, update when props change
  const [fromValue, setFromValue] = useState(initialFrom);
  const [toValue, setToValue] = useState(initialTo);
  const [date, setDate] = useState(initialDate);
  const [selectedOption, setSelectedOption] = useState(initialOption);

  useEffect(() => {
    setFromValue(initialFrom);
  }, [initialFrom]);

  useEffect(() => {
    setToValue(initialTo);
  }, [initialTo]);

  useEffect(() => {
    setDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    setSelectedOption(initialOption);
  }, [initialOption]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const formatDate = (d) => d.toISOString().split("T")[0];

  const toggleOption = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      setDialogMessage(
        option === "women"
          ? "Booking for Women is disabled"
          : "Booking for Senior is disabled"
      );
    } else {
      setSelectedOption(option);
      setDialogMessage(
        option === "women"
          ? "Booking for Women is enabled"
          : "Booking for Senior is enabled"
      );
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSearchClick = () => {
    if (!fromValue || !toValue) {
      alert("Please fill both From and To fields.");
      return;
    }
    if (onSearch) {
      onSearch({
        from: fromValue,
        to: toValue,
        date,
        option: selectedOption,
      });
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, #13bdac)",
        color: "#f8f8f8ff",
        position: sticky ? "sticky" : "static",
        top: sticky ? 0 : "auto",
        zIndex: sticky ? 1200 : "auto",
        boxShadow: sticky ? "0 2px 8px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: { xs: 2, md: 3 },
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          position: "relative",
          textAlign: "center",
          px: 2,
          userSelect: "none",
          height: 40,
          lineHeight: "40px",
        }}
      >
        {showBack && (
          <Button
            onClick={onBack}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              minWidth: "auto",
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#f8f8f8",
              fontWeight: "bold",
              fontSize: 24,
              lineHeight: 1,
              padding: 0,
              "&:hover": {
                backgroundColor: "rgba(33, 135, 125, 0.8)",
                color: "#fff",
              },
              cursor: "pointer",
              zIndex: 1300,
            }}
            aria-label="Go back"
          >
            &#x276E;
          </Button>
        )}

        Book Your Ticket
      </Typography>

      <Paper
        sx={{
          p: { xs: 1.5, md: 2 },
          maxWidth: 750,
          mx: "auto",
          borderRadius: 3,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 6px 20px rgba(0,0,0,0.3)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1.2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            label="From"
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          />
          <TextField
            label="To"
            variant="outlined"
            size="small"
            sx={{ flex: 1 }}
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            value={formatDate(date)}
            onChange={(e) => setDate(new Date(e.target.value))}
            InputLabelProps={{ shrink: true }}
            size="small"
            sx={{ minWidth: 150 }}
          />

          <Stack direction="row" spacing={2}>
            <Button
              variant={selectedOption === "women" ? "contained" : "outlined"}
              color="secondary"
              size="small"
              onClick={() => toggleOption("women")}
              sx={{ fontWeight: "bold", minWidth: 100 }}
            >
              Women
            </Button>
            <Button
              variant={selectedOption === "senior" ? "contained" : "outlined"}
              color="secondary"
              size="small"
              onClick={() => toggleOption("senior")}
              sx={{ fontWeight: "bold", minWidth: 100 }}
            >
              Senior Citizen
            </Button>
          </Stack>

          <Button
            variant="contained"
            size="small"
            sx={{
              px: 2.5,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #21877dff)",
              "&:hover": {
                background: "linear-gradient(135deg, #1f7a71ff)",
              },
              mt: { xs: 2, md: 0 },
              alignSelf: { xs: "center", md: "auto" },
            }}
            onClick={handleSearchClick}
          >
            Search
          </Button>
        </Stack>
      </Paper>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Booking Status</DialogTitle>
        <DialogContent>
          <Typography>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>OK</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
