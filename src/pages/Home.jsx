import React from "react";
import SEO from "../components/SEO";
import RoutesSection from "../components/RoutesSection";

export default function Home() {
  return (
    <>
      <SEO
        title="UrbanRide Cab - Book Your Ride Instantly"
        description="Fast, affordable, and reliable cab booking service from Pune to major destinations."
      />
      <RoutesSection />
    </>
  );
}
