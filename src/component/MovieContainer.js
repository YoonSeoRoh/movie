//영화 목록 그리기
//데이터 요청
import MovieCard from "./MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieContainer(props) {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (props.word !== "") {
      axios
        .get("/v1/search/movie.json", {
          params: {
            query: props.word,
            display: 20,
          },
          headers: {
            "X-Naver-Client-Id": CLIENT_ID,
            "X-Naver-Client-Secret": CLIENT_SECRET,
          },
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          setMovies(response.data);
        });
    }
  }, [props.word, CLIENT_ID, CLIENT_SECRET]);
  return (
    <>
      {isLoading
        ? "Loading..."
        : movies &&
          movies.items.map((movie, idx) => (
            <MovieCard
              id={idx}
              actor={movie.actor}
              director={movie.director}
              image={movie.image}
              link={movie.link}
              pubDate={movie.pubDate}
              subtitle={movie.subtitle}
              title={movie.title}
              userRating={movie.userRating}
            />
          ))}
    </>
  );
}
