import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ShowProcess from "./ShowProcess";
import citizenship from "../assets/citizenship.png";
import residence from "../assets/residence.png";
const Process = () => {
  return (
    <Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#1E3040",
            width: "25px",
            padding: "1px",
            marginBottom: "23px",
          }}
        />
        <Typography
          variant="h1"
          sx={{ color: "#721421", fontSize: "25px", fontWeight: "500" }}
        >
          Process
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "20px",
            margin: "30px 0px 28px 0px",
          }}
        >
          Explore your next great experience in Peru
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2px",
          color: "white",
        }}
      >
        <ShowProcess
          img={citizenship}
          border="4px 0px 0px 4px"
          label="Citizenship by Investment"
          description="Citizenship by investment is a program that allows individuals to obtain
                citizenship and, consequently, a passport of that country, in exchange
                for making a significant financial investment."
        />
        <ShowProcess
          img={residence}
          border="0px 4px 4px 0px"
          label="RESIDENCY by Investment"
          description="Residency by investment is a program that allows foreign nationals to obtain a legal residence permit in exchange for making a significant economic investment in the host country. "
        />
      </Container>
    </Container>
  );
};

export default Process;
