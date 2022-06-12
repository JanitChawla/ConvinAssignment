import * as React from "react";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

export default function MediaCard() {
  const data = useSelector((state) => state.users);
  console.log(data);

  return !data.id ? (
    <div>
      <p>Please Click a button to see details in card</p>
      <CircularProgress />
    </div>
  ) : (
    <div style={{ marginTop: "25px" }}>
      <Card style={{ margin: "auto" }} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="300"
          image={data.avatar}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.id}. {data.first_name} {data.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {data.email}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
