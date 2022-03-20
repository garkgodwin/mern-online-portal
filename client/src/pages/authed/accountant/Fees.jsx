import React from "react";
import { Container, Typography } from "@mui/material";

const Fees = () => {
  return (
    <Container sx={{ mt: 8, py: 8, width: 1 }}>
      <Typography variant="h4">Accountant Fees Page</Typography>
      <Typography variant="h5">Can manipulate fees</Typography>
      <Typography variant="h5">
        Fees depends on course, subjects, balance and so on...
      </Typography>
    </Container>
  );
};

export default Fees;
