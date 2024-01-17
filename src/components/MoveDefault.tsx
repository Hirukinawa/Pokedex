import { MoveAPI } from "../App";

export const MoveDefault: MoveAPI = {
  id: 33,
  name: "Tackle",
  power: 40,
  pp: 35,
  priority: 0,
  type: {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  },
  accuracy: 100,
  damage_class: {
    name: "physical",
    url: "https://pokeapi.co/api/v2/move-damage-class/2/",
  },
  effect_chance: 0,
  effect_entries: [
    {
      effect: "Inflicts regular damage.",
      short_effect: "Inflicts regular damage with no additional effect.",
      language: {
        name: "en",
      },
    },
  ],
  learned_by_pokemon: [
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
  ],
};
