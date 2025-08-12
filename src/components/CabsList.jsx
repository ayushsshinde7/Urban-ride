import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Button,
  Divider,
  Drawer,
} from "@mui/material";

const seatPositions = [
  { id: 1, label: "Front Seat", row: "front" },
  { id: 2, label: "Middle Left", row: "middle" },
  { id: 3, label: "Middle Center", row: "middle" },
  { id: 4, label: "Middle Right", row: "middle" },
  { id: 5, label: "Last Left", row: "last" },
  { id: 6, label: "Last Right", row: "last" },
];

function SeatButton({ seat, selected, disabled, onToggle }) {
  return (
    <Button
      variant={selected ? "contained" : "outlined"}
      color={selected ? "success" : "primary"}
      onClick={onToggle}
      disabled={disabled}
      sx={{
        width: 50,
        height: 50,
        borderRadius: 2,
        textTransform: "none",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
        userSelect: "none",
      }}
    >
      {seat.label.split(" ")[0]}
    </Button>
  );
}

function SeatSelector({ cab, option, closeDrawer }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Allowed seats based on option
  const allowedSeats =
    option === "women"
      ? [5, 6] // only last row seats
      : option === "senior"
      ? [1] // only first seat
      : seatPositions.map((s) => s.id);

  // Max selectable seats
  const maxSelectable = option === "women" ? 2 : option === "senior" ? 1 : 6;

  const handleToggle = (seatId) => {
    if (!allowedSeats.includes(seatId)) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
    } else {
      if (selectedSeats.length >= maxSelectable) return;
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const isSeatDisabled = (seatId) => {
    if (!allowedSeats.includes(seatId)) return true;
    if (!selectedSeats.includes(seatId) && selectedSeats.length >= maxSelectable)
      return true;
    return false;
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Select Seats for {cab.name} (Max {maxSelectable})
      </Typography>

      <Stack
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: 350,
          mx: "auto",
          userSelect: "none",
        }}
      >
        {["front", "middle", "last"].map((row) => (
          <Stack direction="row" justifyContent="center" spacing={2} key={row}>
            {seatPositions
              .filter((seat) => seat.row === row)
              .map((seat) => (
                <SeatButton
                  key={seat.id}
                  seat={seat}
                  selected={selectedSeats.includes(seat.id)}
                  disabled={isSeatDisabled(seat.id)}
                  onToggle={() => handleToggle(seat.id)}
                />
              ))}
          </Stack>
        ))}

        <Typography sx={{ mt: 1 }}>
          Selected Seats: {selectedSeats.length}{" "}
          {selectedSeats.length > 0 && `(${selectedSeats.join(", ")})`}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          fullWidth
          onClick={() => {
            alert(
              `You have booked seats: ${selectedSeats.join(", ")} on ${cab.name}`
            );
            closeDrawer();
          }}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </Button>
      </Stack>
    </Box>
  );
}

export default function CabsList({ from, to, date, option }) {
  const mockCabs = [
    {
      id: 1,
      name: "City Cab",
      rating: 4.2,
      time: "5pm - 10pm",
      seatsAvailable: 5,
      price: 200,
    },
    {
      id: 2,
      name: "Fast Ride",
      rating: 4.7,
      time: "6pm - 11pm",
      seatsAvailable: 2,
      price: 250,
    },
    {
      id: 3,
      name: "Luxury Ride",
      rating: 4.9,
      time: "7pm - 12am",
      seatsAvailable: 8,
      price: 500,
    },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);

  const openDrawer = (cab) => {
    setSelectedCab(cab);
    setDrawerOpen(true);
  };
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <Box
      sx={{
        maxWidth: "100%",
        mx: "auto",
        mt: 4,
        px: 2,
        backgroundColor: "#e0f2f1",
        borderRadius: 0,
        py: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Available Cabs from {from} to {to} on{" "}
        {date instanceof Date ? date.toDateString() : String(date)}
        {option === "women" && " (Women Booking Enabled)"}
        {option === "senior" && " (Senior Citizen Booking Enabled)"}
      </Typography>

      <Stack spacing={3}>
        {mockCabs.map((cab) => (
          <Paper
            key={cab.id}
            sx={{
              p: 2,
              borderRadius: 1,
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1 }}>
              <Typography variant="h6" sx={{ flex: 2, fontWeight: "bold" }}>
                {cab.name}
              </Typography>

              <Typography sx={{ flex: 1 }}>⭐ {cab.rating.toFixed(1)}</Typography>

              <Typography sx={{ flex: 2 }}>{cab.time}</Typography>

              <Typography sx={{ flex: 2, color: "green", fontWeight: "bold" }}>
                Seats Available: {cab.seatsAvailable}
              </Typography>

              <Typography sx={{ flex: 1, textAlign: "right", fontWeight: "bold" }}>
                ₹{cab.price}
              </Typography>
            </Stack>

            <Divider sx={{ mb: 1 }} />

            <Stack direction="row" justifyContent="flex-start">
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={() => openDrawer(cab)}
              >
                View Seats
              </Button>
            </Stack>
          </Paper>
        ))}
      </Stack>

      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{ sx: { borderTopLeftRadius: 16, borderTopRightRadius: 16, p: 3 } }}
      >
        {selectedCab && (
          <SeatSelector cab={selectedCab} option={option} closeDrawer={closeDrawer} />
        )}
      </Drawer>
    </Box>
  );
}
