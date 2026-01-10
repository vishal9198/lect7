import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"...loading"}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"...loading"}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
