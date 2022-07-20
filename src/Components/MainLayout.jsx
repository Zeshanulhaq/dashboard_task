import { Box } from "@mui/material";
import React from "react";
import PCard from "./Dashleft";
import Herosection from "./Herosection";
import RCard from "./RightDash";

const MainLayout = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: "10px",
      }}
    >
      <PCard />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin: "10px",
        }}
      >
        <Herosection />
      </Box>
      <RCard />
    </Box>
  );
};

export default MainLayout;
