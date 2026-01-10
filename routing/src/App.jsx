import { lazy, Suspense, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
import Navbar from "./components/Navbar";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
}

function Count() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <CountRender />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRender() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decreases
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increases
      </button>
    </div>
  );
}

export default App;
