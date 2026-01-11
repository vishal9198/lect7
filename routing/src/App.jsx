import { lazy, useEffect, useMemo, useState } from "react";

import { todosFamily } from "./store/atoms/atom";

import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Mainapp />
      </RecoilRoot>
    </>
  );
}

function Mainapp() {
  const udateTodo = useSetRecoilState(todosFamily(2));
  useEffect(() => {
    setTimeout(() => {
      udateTodo({
        id: "2",
        title: "run",
        description: "run at 4",
      });
    }, 5000);
  }, []);

  return (
    <div>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={1} />
    </div>
  );
}

function Todo({ id }) {
  const [currentTodo, setCurrentTodo] = useRecoilState(todosFamily(id));
  console.log(`todo with id ${id} re-render`);
  return (
    <div>
      {currentTodo.title}
      {currentTodo.description}
    </div>
  );
}

export default App;
