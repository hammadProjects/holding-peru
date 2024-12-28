import React from "react";
import { Box, Button, Typography } from "@mui/material";

const InfoSection = ({ line, description, label, bg }) => {
  return (
    <Box sx={{ width: "554px" }}>
      {line === "top" ? (
        <Box
          sx={{
            backgroundColor: "#1E3040",
            width: "25px",
            padding: "2px",
            marginBottom: "23px",
          }}
        />
      ) : (
        <></>
      )}
      <Typography
        variant="h1"
        sx={{ color: "#721421", fontSize: "25px", fontWeight: "500" }}
      >
        {label}
      </Typography>
      {line === "bottom" ? (
        <Box
          sx={{
            backgroundColor: "#1E3040",
            width: "25px",
            height: "3px",
            marginTop: "4px",
          }}
        />
      ) : (
        <></>
      )}
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "20px",
          margin: "30px 0px 28px 0px",
        }}
      >
        {description}
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: "#1E3040" }}>
        Know more
      </Button>
    </Box>
  );
};

export default InfoSection;
