/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
//import PokemonDetails from "./components/pages/PokemonDetails";
//import Home from "./components/pages/Home";
//import { Link } from "react-router-dom";

export interface Pokemon {
  id: number;
  name: string;
}

export interface PokemonAPI {
  id: number;
  name: string;
  types: TypeSlot[];
  abilities: Abilities[];
}

// interface ApiResult {
//   count: number | undefined;
//   next: string | undefined;
//   previous: string;
//   results: PokemonResult[];
// }

export interface PokemonResult {
  name: string;
  url: string;
}

interface TypeSlot {
  slot: number;
  type: Type[];
}

interface Type {
  name: string;
  url: string;
}

interface Abilities {
  slot: number;
  ability: Ability[];
  is_hidden: boolean;
}

interface Ability {
  name: string;
  url: string;
}

export default function App() {
  return <Router></Router>;
}
