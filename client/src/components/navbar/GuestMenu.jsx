import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const GuestMenu = ({ menu }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Toolbar disableGutters>
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
      >
        QIT
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {menu.map((page) => (
            <MenuItem key={page.path} onClick={handleCloseNavMenu}>
              <Link
                component={RouterLink}
                to={page.path}
                color="secondary"
                underline="hover"
              >
                {page.text}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        QIT
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {menu.map((page) => (
          <Button
            key={page.path}
            component={RouterLink}
            to={page.path}
            color="secondary"
            variant="outlined"
            sx={{ ml: 1 }}
          >
            {page.text}
          </Button>
        ))}
      </Box>

      <Box sx={{ flexGrow: 0 }}>
        <Button
          component={RouterLink}
          to="/login"
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </Toolbar>
  );
};

export default GuestMenu;
