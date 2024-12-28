import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          src={logo}
          sx={{ width: "173.3px", height: "50px" }}
        />
        <Box sx={{ display: "flex", padding: "50px" }}>
          <Box sx={{ display: "flex", gap: "57px" }}>
            {[
              "AR",
              "Home",
              "About us",
              "Testimonials",
              "Programs",
              "Process",
              "Blog",
            ].map((menu, i) => {
              return (
                <Typography variant="h6" sx={{ fontSize: "14px" }} key={i}>
                  {menu}
                </Typography>
              );
            })}
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4C6275",
              color: "#FFFFFF",
              marginLeft: "104px",
            }}
          >
            Apply now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
