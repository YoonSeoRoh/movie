import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 70%;
  height: 45px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  margin: 10px;
  color: #bbb;
  :focus {
    outline: none;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export default function Search(props) {
  const [text, setText] = useState("");
  //input값 핸들링
  const onChange = (e) => {
    setText(e.target.value);
  };
  //input 필드 초기화
  const resetInput = () => {
    setText("");
    props.setData(text);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    resetInput();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputWrap>
          <FontAwesomeIcon
            style={{
              marginTop: "15px",
              width: "40px",
              height: "40px",
              color: "#ffcd2b",
            }}
            icon={faMagnifyingGlass}
          />
          <StyledInput
            placeholder="제목을 입력 후 enter키를 눌러주세요."
            type="text"
            onChange={onChange}
            value={text}
          />
        </InputWrap>
      </form>
    </div>
  );
}
