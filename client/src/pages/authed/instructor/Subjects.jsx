import React from "react";
import { Container, Typography } from "@mui/material";

const Subjects = () => {
  return (
    <Container sx={{ mt: 8, py: 8, width: 1 }}>
      <Typography variant="h4">Instructor Subjects Page</Typography>
      <Typography variant="h5">Contains grades of students</Typography>
      <Typography variant="h5">Contains students per subject</Typography>
    </Container>
  );
};

export default Subjects;
