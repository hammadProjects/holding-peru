import React from "react";
import AboutUs from "./AboutUs";
import { Container } from "@mui/material";
import Programs from "./Programs";
import Process from "./Process";

const HighlightsSection = () => {
  return (
    <Container
      sx={{ padding: "68px 0px 68px 0px", backgroundColor: "#F3F5F8" }}
      maxWidth={false}
    >
      <AboutUs />
      <Programs />
      <Process />
    </Container>
  );
};

export default HighlightsSection;
