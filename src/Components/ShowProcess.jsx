import React from "react";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import azul from "../assets/azul.png";
import { Box, Typography } from "@mui/material";

const ShowProcess = ({ img, label, description, border }) => {
  return (
    <Box
      sx={{
        backgroundImage: [`url(${img})`, `url(${azul})`].join(", "),
        borderRadius: `${border}`,
        width: "571px",
        height: "559px",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0px 0px 20px 20px",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "25px", fontWeight: "500" }}>
        {label}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#4682B4",
          width: "25px",
          height: "3px",
          marginTop: "6px",
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          marginY: "18px",
          width: "330px",
        }}
      >
        {description}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "white", textDecoration: "underline" }}
      >
        Know more <ArrowOutwardIcon fontSize="5px" />
      </Typography>
    </Box>
  );
};

export default ShowProcess;
