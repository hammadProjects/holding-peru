import { Box, Container } from "@mui/material";
import React from "react";
import InfoSection from "./InfoSection";

const AboutUs = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", marginBottom: "119px" }}>
      <InfoSection
        line="bottom"
        description="We are an international organization based in Peru, specializing in
        guiding clients through the intricate processes of citizenship and
        residency by investment. With our expertise and deep understanding of
        Peru's opportunities, we empower global investors to secure a brighter
        future in one of the world's most promising destinations."
        label="ABOUT US"
        bg="1E3040"
      />
    </Container>
  );
};

export default AboutUs;
