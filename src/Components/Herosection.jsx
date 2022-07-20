import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e4e4e4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "250px",
  height: "250px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Small = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e4e4e4",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "110px",
  height: "110px",
  textAlign: "center",

  color: theme.palette.text.secondary,
}));
const Herosection = () => {
  return (
    <Box
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Item>xs</Item>
          </Grid>
          <Grid item md={6}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Small>1000 Minirals</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: "10px" }}>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: "10px" }}>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
          <Grid item md={3}>
            <Small>Small</Small>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Herosection;
