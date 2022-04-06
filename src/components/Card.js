import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <CardBox>
      <Task>Descrição da task</Task>
      <Flex>
        <User
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          alt="user"
        />
        <Tag>tag</Tag>
      </Flex>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 10px;
  width: 280px;
  height: 81px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const Task = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #171717;
`;

const User = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Tag = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 4px;
  height: 20px;
  background-color: #59b4d1;
  border-radius: 2px;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
`;
export default Card;
