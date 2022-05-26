import styled from "styled-components";
import { useState } from "react";
import Search from "./Search";
import MovieContainer from "./MovieContainer";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #161b20;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

export default function Home() {
  const [data, setData] = useState("");
  return (
    <Container>
      <Search setData={setData} />
      <MovieContainer word={data} />
    </Container>
  );
}
