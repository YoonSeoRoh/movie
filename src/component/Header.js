import styled from "styled-components";

const Block = styled.div`
  background-color: #161b20;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: auto;
  color: #ffcd2b;
`;

export default function Header() {
  return (
    <Block>
      <Title>MY MOVIE APP</Title>
    </Block>
  );
}
