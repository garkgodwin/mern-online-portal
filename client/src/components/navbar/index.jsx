import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppBar, Container } from "@mui/material";

import GuestMenu from "./GuestMenu";
import AuthedMenu from "./AuthedMenu";

import getMenu from "../../constants/menu";

const Navbar = () => {
  const role = useSelector((state) => state.auth.role);
  const username = useSelector((state) => state.auth.username);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(getMenu(role, isLoggedIn));
  }, [role]);
  return (
    <AppBar position="fixed" elevation={0} color="primary">
      <Container maxWidth="xl">
        {isLoggedIn ? (
          <AuthedMenu menu={menu} username={username} />
        ) : (
          <GuestMenu menu={menu} />
        )}
      </Container>
    </AppBar>
  );
};
export default Navbar;
