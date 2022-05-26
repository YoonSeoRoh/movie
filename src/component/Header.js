import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Block = styled.div`
  background-color: #161b20;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: auto;
  color: #ffcd2b;
  position: relative;
`;

const BookmarkBtn = styled.button`
  background-color: transparent;
  color: #ffcd2b;
  width: 50px;
  height: 50px;
  border: none;
  font-size: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Block>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Title>MY MOVIE APP</Title>
      </Link>
      <Link to="/bookmark">
        <BookmarkBtn>
          <FontAwesomeIcon icon={faBookmark} />
        </BookmarkBtn>
      </Link>
    </Block>
  );
}
