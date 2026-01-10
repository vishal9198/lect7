import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="btn" style={{ backgroundColor: "black" }}>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing
      </button>
    </div>
  );
}

export default Navbar;
