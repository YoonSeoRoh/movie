import styled from "styled-components";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const BookmarkListWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #161b20;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

export default function BookMarkContainer() {
  const [movies, setMovies] = useState();
  const [isLoading, setLoading] = useState(true);
  const makeList = () => {
    const arr = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      const value = JSON.parse(window.localStorage.getItem(key));
      arr.push(value);
    }
    setMovies(arr);
  };
  useEffect(() => {
    makeList();
    setLoading(false);
  }, []);
  return (
    <BookmarkListWrap>
      {isLoading
        ? "Loading..."
        : movies &&
          movies.map((movie, idx) => {
            const title = movie.title;
            const newTitle = title.replace(/(<([^>]+)>)/gi, "");
            const director = movie.director;
            const newDirector = director.replace("|", "");
            return (
              <MovieCard
                key={idx}
                actor={movie.actor}
                director={newDirector}
                image={movie.image}
                link={movie.link}
                pubDate={movie.pubDate}
                title={newTitle}
                userRating={movie.userRating}
                isList={true}
              />
            );
          })}
    </BookmarkListWrap>
  );
}
