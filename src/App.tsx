/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import { Link } from "react-router-dom";

function App() {
  const [lista] = useState([1, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

  function populaPkmn() {
    const pkmns = lista.map(() => {
      return <Card />;
    });
    return pkmns;
  }

  return (
    <div className="bgWhite">
      <h1>Pokédex foda</h1>
      <div className="pkmns">{populaPkmn()}</div>
    </div>
  );
}

export default App;
