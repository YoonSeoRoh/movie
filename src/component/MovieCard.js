//개별 영화 그리기
import styled from "styled-components";
import AddBtn from "./AddBtn";
import DeleteBtn from "./DeleteBtn";

const MovieWrap = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  border-bottom: 1px solid white;
  position: relative;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
`;

const BtnWrap = styled.div`
  position: absolute;
  right: 0;
`;

export default function MovieCard({
  actor,
  director,
  image,
  link,
  pubDate,
  title,
  userRating,
  isList,
}) {
  return (
    <MovieWrap>
      <a href={link}>
        <img style={{ padding: "10px" }} src={image} alt={title}></img>
      </a>
      <Detail>
        <h3>{title}</h3>
        <span>{pubDate}</span>
        <span>감독: {director}</span>
        <span>출연: {actor}</span>
        <span>평점: {userRating}</span>
        <a href={link} style={{ color: "#ffffff" }}>
          더보기
        </a>
      </Detail>
      <BtnWrap>
        {isList ? (
          <DeleteBtn link={link}></DeleteBtn>
        ) : (
          <AddBtn
            actor={actor}
            director={director}
            image={image}
            link={link}
            pubDate={pubDate}
            title={title}
            userRating={userRating}
          />
        )}
      </BtnWrap>
    </MovieWrap>
  );
}
