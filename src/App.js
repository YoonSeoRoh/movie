import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import MovieContainer from "./component/MovieContainer";
import Search from "./component/Search";
import Header from "./component/Header";

const Container = styled.div``;

function App() {
  const [data, setData] = useState("");
  console.log("check state from App");
  return (
    <div className="App">
      <Header />
      <Container>
        <Search setData={setData} />
        <MovieContainer word={data} />
      </Container>
    </div>
  );
}

export default App;
