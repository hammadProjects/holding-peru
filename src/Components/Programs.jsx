import React from "react";
import MaskGroup from "../assets/MaskGroup.png";
import { Box, Container } from "@mui/material";
import InfoSection from "./InfoSection";

const Programs = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "26px 30px 26px 26px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginBottom: "100px"
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${MaskGroup})`,
          width: "400px",
          height: "300px",
          backgroundSize: "cover",
          borderRadius: "3px",
          border: "none",
        }}
      />
      <InfoSection
        line="top"
        label="PROGRAMS"
        bg="FFFFFF"
        description="Itinera offers the opportunity to obtain citizenship and residency in Peru through investment programs carefully designed to maximize personal and business benefits. By investing in Peru, you not only gain access to a privileged immigration status, but also become part of an economically and culturally growing country."
      />
    </Container>
  );
};

export default Programs;
