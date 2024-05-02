import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    width: "50px",
    height: "30px",
    fontSize: "20px",
    borderRadius: "5px",
    border: "none",
    color: "white",
    backgroundColor: "gray",
    cursor: "pointer",
    margin: "10px",
  };
  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const container = {
    width: "200px",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, .5)",
    paddingTop: "80px",
  };
  return (
    <div style={main}>
      <div style={container}>
        <div>CounterApp</div>
        <h3>{count}</h3>
        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          +
        </button>
        <button style={buttonStyle} onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
