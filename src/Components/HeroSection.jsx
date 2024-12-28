import { Button, Container, Typography } from "@mui/material";
import bg from "../assets/hero-bg.png";
import line from "../assets/Line1.png";

const heroSectionStyles = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "white",
  height: "500px",
  alignItems: "right"
};

const infoContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "150px 149px 0px 0px",
  textAlign: "right"
};

const titleStyles = {
  fontSize: "45px",
  fontWeight: "500",
  fontStyle: "italic",
  textShadow: "1px 1px 2px rgba(0,0,0, 0.25)",
  marginBottom: "20px",
};

const imageStyles = {
  backgroundImage: `url(${line})`,
  width: "120px",
  height: "2px",
  display: "flex",
  justfyContent: "flex-end",
  marginRight: "0px",
  marginBottom: "11px",
};

const subtitleStyles = {
  fontSize: "18px",
  fontWeight: "500",
  width: "348px",
  textAlign: "right",
  textShadow: "1px 1px 2px rgba(0,0,0, 0.25)",
  marginBottom: "35px",
};

const HeroSection = () => {
  return (
    <Container maxWidth={false} sx={heroSectionStyles}>
      <Container sx={infoContainer}>
        <Typography variant="h1" sx={titleStyles}>
          Freedom, simplified
        </Typography>
        <Container sx={imageStyles}></Container>
        <Typography variant="subtitle1" sx={subtitleStyles}>
          A bridge between Peru's opportunities and the citizens of the world
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1E3040",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Assess your case
        </Button>
      </Container>
    </Container>
  );
};

export default HeroSection;