import { lazy, useMemo, useState } from "react";
import { countAtom, evenSelector } from "./store/atoms/count";

import "./App.css";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRender />
      <Buttons />
    </div>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
      <EvenCountRender />
    </div>
  );
}

function EvenCountRender() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is Even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("button re-render");
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decreases
      </button>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        increases
      </button>
    </div>
  );
}

export default App;
