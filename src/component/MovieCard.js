//개별 영화 그리기
import styled from "styled-components";

const MovieWrap = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  border-bottom: 1px solid white;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
`;

export default function MovieCard({
  id,
  actor,
  director,
  image,
  link,
  pubDate,
  subtitle,
  title,
  userRating,
}) {
  return (
    <MovieWrap>
      <a href={id}>
        <img style={{ padding: "10px" }} src={image} alt={title}></img>
      </a>
      <Detail>
        <h3>{title}</h3>
        <span>{pubDate}</span>
        <span>감독: {director}</span>
        <span>출연: {actor}</span>
        <span>평점: {userRating}</span>
      </Detail>
    </MovieWrap>
  );
}
