import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Offers from "./components/Offers";
import RoutesSection from "./components/RoutesSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import CabsList from "./components/CabsList";

export default function App() {
  const [searchParams, setSearchParams] = useState(null);

  // Keep form fields here to pass to SearchBar for controlled input persistence
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [dateValue, setDateValue] = useState(new Date());
  const [optionValue, setOptionValue] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);

    // Also update form values here to keep
    setFromValue(params.from);
    setToValue(params.to);
    setDateValue(params.date);
    setOptionValue(params.option);
  };

  const handleBack = () => {
    setSearchParams(null);
    // Optionally, reset inputs or keep them as is
    // If you want to reset inputs on back, uncomment below:
    // setFromValue("");
    // setToValue("");
    // setDateValue(new Date());
    // setOptionValue(null);
  };

  return (
    <Box>
      <Header />

      {searchParams ? (
        <>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 1100,
              backgroundColor: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <SearchBar
              onSearch={handleSearch}
              showBack={true}
              onBack={handleBack}
              sticky
              // Pass current values so SearchBar shows them
              initialFrom={fromValue}
              initialTo={toValue}
              initialDate={dateValue}
              initialOption={optionValue}
            />
          </Box>

          <CabsList
            from={searchParams.from}
            to={searchParams.to}
            date={searchParams.date}
            option={searchParams.option}
          />
        </>
      ) : (
        <>
          <SearchBar
            onSearch={handleSearch}
            // Pass current values for persistence
            initialFrom={fromValue}
            initialTo={toValue}
            initialDate={dateValue}
            initialOption={optionValue}
          />

          <Offers />
          <RoutesSection />
          <FAQSection />
          <Footer />
        </>
      )}
    </Box>
  );
}
