import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./actions/posts";
import { useSelector } from "react-redux";

import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";
import TextButtons from "./Button/Button";
import MediaCard from "./Cards/cards";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const data = useSelector((state) => state.posts);
  console.log(data);
  return !data.length ? (
    <CircularProgress />
  ) : (
    <Container style={{ padding: "0" }} maxWidth="xl">
      <div className="App">
        <h1>Convin FrontEnd Assignment</h1>
        <span>By Janit Chawla</span>

        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {data.map((item) => (
            <TextButtons item={item} />
          ))}
        </div>
        <MediaCard />
      </div>
    </Container>
  );
}

export default App;
