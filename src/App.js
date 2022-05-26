import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import MovieContainer from "./component/MovieContainer";
import Search from "./component/Search";
import Header from "./component/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #161b20;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

function App() {
  const [data, setData] = useState("");
  return (
    <>
      <Header />
      <Container>
        <Search setData={setData} />
        <MovieContainer word={data} />
      </Container>
    </>
  );
}

export default App;
