import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";

const PageLoading = () => {
  let loading = useSelector((state) => state.auth.loading);
  let message = useSelector((state) => state.auth.message);
  const color = "#003b46";

  return (
    <Box
      sx={{
        position: "absolute",
        display: loading ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: 1,
        zIndex: "modal",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
      }}
    >
      <BounceLoader color={color} loading={true} size={150} />
      <Typography variant="h3">{message}</Typography>
    </Box>
  );
};

export default PageLoading;
