import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const RankListWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #161b20;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const Customli = styled.li`
  list-style: none;
  margin: 10px;
  a {
    text-decoration-line: none;
    color: white;
  }
`;

export default function RankContiner() {
  const [rankData, setRankData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getRankData = () => {
    setLoading(true);
    axios.get("/api/rank").then((response) => {
      setRankData(response.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getRankData();
  }, []);
  return (
    <RankListWrap>
      <ul>
        {isLoading
          ? "Loading..."
          : rankData &&
            rankData.map((rank, idx) => {
              return (
                <Customli key={idx}>
                  <span>{idx + 1}</span>
                  <a href={`https://movie.naver.com/${rank.link}`}>
                    <span>{rank.title}</span>
                  </a>
                </Customli>
              );
            })}
      </ul>
    </RankListWrap>
  );
}
