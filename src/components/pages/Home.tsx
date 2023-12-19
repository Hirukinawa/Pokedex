/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pokemon } from "../../App";
import Card from "../Card";
//import { NavLink } from "react-router-dom";
import "../../App.css";
//import PokemonDetails from "./PokemonDetails";
//import { Link } from "react-router-dom";

export default function Home() {
  const lista: Pokemon[] = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Charmander" },
    { id: 5, name: "Charmeleon" },
    { id: 6, name: "Charizard" },
    { id: 7, name: "Squirtle" },
    { id: 8, name: "Wartortle" },
    { id: 9, name: "Blastoise" },
    { id: 10, name: "Caterpie" },
    { id: 11, name: "Metapod" },
    { id: 12, name: "Butterfree" },
    { id: 13, name: "Weedle" },
    { id: 14, name: "Kakuna" },
    { id: 15, name: "Beedrill" },
    { id: 16, name: "Pidgey" },
    { id: 17, name: "Pidgeotto" },
    { id: 18, name: "Pidgeot" },
    { id: 19, name: "Rattata" },
    { id: 20, name: "Raticate" },
    { id: 21, name: "Spearow" },
    { id: 22, name: "Fearow" },
    { id: 23, name: "Ekans" },
    { id: 24, name: "Arbok" },
    { id: 25, name: "Pikachu" },
    { id: 26, name: "Raichu" },
  ];

  function populaPkmn() {
    const pkmns = lista.map((pokemon) => {
      return <Card id={pokemon.id} name={pokemon.name} />;
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
