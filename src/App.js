import React from "react";
import Column from "./components/Column";
import Card from "./components/Card";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { tasks, columns } from "./data";

const theme = {
  toDo: "#59B4D1",
  inProgress: "#D0935A",
  review: "#945AD1",
  done: "#59D090",
};

// function foo(props) {
//   console.log(props.title);
// }

// foo({ title: "meu titulo", description: "descricao" });

// <Foo title="titulo" description="descricao" />

function App() {
  return (
    <React.Fragment>
      <Title>Kanban</Title>
      <ColumnsBox>
        <ThemeProvider theme={theme} />
        <Column icon={columns.toDo.icon} title={columns.toDo.title}>
          {tasks.toDo.map((task) => (
            <Card
              user={task.user}
              description={task.description}
              tag={task.tag}
            />
          ))}
        </Column>
        <Column icon={columns.inProgress.icon} title={columns.inProgress.title}>
          {tasks.inProgress.map((task) => (
            <Card
              user={task.user}
              description={task.description}
              tag={task.tag}
            />
          ))}
        </Column>
        <Column icon={columns.review.icon} title={columns.review.title}>
          {tasks.review.map((task) => (
            <Card
              user={task.user}
              description={task.description}
              tag={task.tag}
            />
          ))}
        </Column>
        <Column icon={columns.done.icon} title={columns.done.title}>
          {tasks.done.map((task) => (
            <Card
              user={task.user}
              description={task.description}
              tag={task.tag}
            />
          ))}
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

  padding: 20px 60px;
  gap: 35px;
`;

export default App;
