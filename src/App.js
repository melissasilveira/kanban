import React from "react";
import Column from "./components/Column";
import Card from "./components/Card";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { tasks } from "./data";

const theme = {
  toDo: "#59B4D1",
  inProgress: "#D0935A",
  review: "#945AD1",
  done: "#59D090",
};

function App() {
  return (
    <React.Fragment>
      <Title>Kanban</Title>
      <ColumnsBox>
        <ThemeProvider theme={theme} />
        <Column>
          <Card></Card>
        </Column>
        <Column>
          <Card />
        </Column>
        <Column>
          <Card />
        </Column>
        <Column>
          <Card />
        </Column>
      </ColumnsBox>
    </React.Fragment>
  );
}

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 45px;
  color: #171717;
  padding: 20px 60px;
`;

const ColumnsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 60px;
  gap: 35px;
`;

export default App;
