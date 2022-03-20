import React from "react";
import { Container, Typography } from "@mui/material";

const Resources = () => {
  return (
    <Container sx={{ mt: 8, py: 8, width: 1 }}>
      <Typography variant="h4">Instructor Resources Page</Typography>
      <Typography variant="h5">
        contains the materials for each subject current semester
      </Typography>
    </Container>
  );
};

export default Resources;
