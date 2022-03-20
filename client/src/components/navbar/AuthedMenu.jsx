import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Link,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import getMenu from "../../constants/menu.js";

const AuthedMenu = ({ menu, username }) => {
  const modUser = username.charAt(0).toUpperCase() + username.slice(1);
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
        <IconButton
          component={RouterLink}
          to="/profile"
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <Avatar alt={modUser} src=".." />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default AuthedMenu;
