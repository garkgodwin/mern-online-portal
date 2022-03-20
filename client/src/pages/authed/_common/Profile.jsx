import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/features/authSlice";
import { Button, Container, Typography } from "@mui/material";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <Container sx={{ mt: 8, py: 8, width: 1 }}>
      <Typography variant="h4">Authenticated Profile Page</Typography>
      <Button
        onClick={() => dispatch(logout())}
        variant="contained"
        color="warning"
      >
        Logout
      </Button>
    </Container>
  );
};

export default Profile;
