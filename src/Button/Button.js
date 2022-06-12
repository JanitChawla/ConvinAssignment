import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../actions/users";

export default function TextButtons({ item }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log(item.id);
    dispatch(fetchUsers(item.id));
  };

  return (
    <div>
      <Stack style={{ margin: "1px" }} direction="col">
        <Button onClick={handleClick} variant="contained">
          {item.id}
        </Button>
      </Stack>
    </div>
  );
}
