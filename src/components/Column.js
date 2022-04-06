import styled from "styled-components";

function Column(props) {
  return (
    <ColumnBox>
      <ColumnTitle>
        <Icon src="todo.png" alt="icon" />
        <Title>To Do</Title>
      </ColumnTitle>
      {props.children}
    </ColumnBox>
  );
}

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 221px;
  background: #59b4d1;
  border-radius: 0px 0px 4px 4px;
  padding: 5px;
  border-top: 5px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
const ColumnTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-self: flex-start;
  gap: 10px;
`;
const Icon = styled.img`
  width: 16px;
  height: 19px;
`;
const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export default Column;
