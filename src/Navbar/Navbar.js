import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import "./navbar.css";
// import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="nav" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <img
              src="https://uploads-ssl.webflow.com/606c4d4ed5ba7ca3bc774c4c/606c5fcd82475240c607a79f_LOGO.svg"
              alt="Convin"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Convin FrontEnd Assignment
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
