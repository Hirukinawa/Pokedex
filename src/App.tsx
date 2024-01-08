/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

export function formataName(word: string) {
  const str1 = word.replace("-", " ");
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}

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
  stats: Status[];
  moves: MoveSlotMove[];
}

export interface MoveSlotMove {
  slot: number;
  move: Move;
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveAPI {
  id: number;
  name: string;
  power: number;
  pp: number;
  priority: number;
  type: Type;
  accuracy: number;
  damage_class: DamageClass;
  effect_chance: number;
  effect_entries: EffectEntrie[];
}

export interface EffectEntrie {
  effect: string;
  short_effect: string;
  language: Language;
}

export interface DamageClass {
  name: string;
  url: string;
}

export interface Status {
  base_stat: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

export interface PokeList {
  pkmnsFav: PokemonAPI[];
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
  id: number;
  name: string;
  url: string;
}

export interface TypeDamage {
  damage_relations: DamageRelation;
}

export interface DamageRelation {
  double_damage_from: Type[];
  half_damage_from: Type[];
  no_damage_from: Type[];
  double_damage_to: Type[];
  half_damage_to: Type[];
  no_damage_to: Type[];
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

export interface ApiList {
  users: ApiUser[];
}

export interface ApiUser {
  id: number;
  name: string;
  avatar: string;
  city: string;
}

export default function App() {
  return <Router></Router>;
}
