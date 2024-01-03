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
  types: TypeSlotType[];
  abilities: AbilitySlot[];
  sprites: Sprites;
}

export interface Specie {
  varieties: [];
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  other: OtherSprites;
}

export interface OtherSprites {
  home: Home;
}

export interface Home {
  front_default: string;
  front_shiny: string;
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface TypeSlotType {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface AbilitySlot {
  slot: number;
  ability: Ability;
  is_hidden: boolean;
}

export interface Ability {
  name: string;
  url: string;
}

export interface AbilityDescription {
  name: string;
  effect_entries: Entries[];
}

export interface Entries {
  effect: string;
  language: Language;
}

export interface Language {
  name: string;
}

export default function App() {
  return <Router></Router>;
}
