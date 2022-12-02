import React from "react";
import ReactDOM from "react-dom";

const R = "Anuradha";
const P = "Rahul";
ReactDOM.render(
  <>
    <h1>Rahul {9648 + 8948}</h1>
    <p>Paswan</p>
    {Math.random()}
    <ol>
      <li>Dark</li>
      <li>Dark</li>
      {R + " " + P}
      <h1>
        Same work as above by using backtick {`my name is Rahul ${R} ${P}`}
      </h1>
      <li>rk</li>
    </ol>
    {R} {P}
  </>,
  document.getElementById("root")
);
