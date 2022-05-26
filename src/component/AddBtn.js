//로컬 스토리지에 저장
import styled from "styled-components";

const StyledAdd = styled.button`
  width: 50px;
  height: 30px;
  color: #161b20;
  background-color: #ffcd2b;
  font-weight: 600;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function AddBtn({
  actor,
  director,
  image,
  link,
  pubDate,
  title,
  userRating,
}) {
  const handleAdd = () => {
    window.localStorage.setItem(
      link,
      JSON.stringify({
        title,
        image,
        pubDate,
        director,
        actor,
        userRating,
        link,
      })
    );
    alert("추가되었습니다.");
  };
  return <StyledAdd onClick={handleAdd}>ADD</StyledAdd>;
}
