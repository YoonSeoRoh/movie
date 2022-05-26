//로컬 스토리지에서 삭제
import styled from "styled-components";

const StyledDelete = styled.button`
  width: 65px;
  height: 30px;
  color: #161b20;
  background-color: #ffcd2b;
  font-weight: 600;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function DeleteBtn({ link }) {
  const handleDelete = () => {
    window.localStorage.removeItem(link);
    alert("삭제되었습니다.");
    window.location.reload();
  };
  return <StyledDelete onClick={handleDelete}>DELETE</StyledDelete>;
}
