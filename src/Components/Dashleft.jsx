import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { Box } from "@mui/system";

const PCard = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 325, maxHeight: 300, margin: "10px" }}>
        <CardActionArea>
          <CardMedia
            wide
            component="img"
            height="140"
            image="/src/assets/1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography align="center" variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Box>
        <Card sx={{ maxWidth: 325, maxHeight: 300, margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              wide
              component="img"
              height="140"
              image="/src/assets/1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography align="center" variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};
export default PCard;
