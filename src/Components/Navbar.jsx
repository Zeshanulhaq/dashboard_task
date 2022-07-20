import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

const pages = [
  "Home",
  "Resources ",
  "Prepare",
  "Estimation",
  "Sales",
  "Setup",
  "Logout",
];

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#Ffff" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <TextField
              label="Search input"
              type={"search"}
              style={{
                margin: "10px",
                marginRight: "80px",
                borderRadius: "5px",
                backgroundColor: "#f1f1f1",
              }}
            ></TextField>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  marginLeft: "25px",
                  my: 2,
                  color: "#000",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
