import { PokemonAPI } from "../App";

export const PokemonDefault: PokemonAPI = {
  id: 0,
  name: "pikachu do Ash",
  types: [
    {
      slot: 1,
      type: { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
    },
  ],
  abilities: [
    {
      ability: {
        name: "static",
        url: "https://pokeapi.co/api/v2/ability/9/",
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10094.png",
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10094.png",
      },
    },
  },
  stats: [
    {
      base_stat: 100,

      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 150,

      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 80,

      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 200,

      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 75,

      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 250,

      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  moves: [
    {
      move: {
        name: "thunder-shock",
        url: "https://pokeapi.co/api/v2/move/84/",
      },
    },
    {
      move: {
        name: "thunderbolt",
        url: "https://pokeapi.co/api/v2/move/85/",
      },
    },
    {
      move: {
        name: "agility",
        url: "https://pokeapi.co/api/v2/move/97/",
      },
    },
    {
      move: {
        name: "quick-attack",
        url: "https://pokeapi.co/api/v2/move/98/",
      },
    },
    {
      move: {
        name: "thunder",
        url: "https://pokeapi.co/api/v2/move/87/",
      },
    },
    {
      move: {
        name: "double-edge",
        url: "https://pokeapi.co/api/v2/move/38/",
      },
    },
    {
      move: {
        name: "tackle",
        url: "https://pokeapi.co/api/v2/move/33/",
      },
    },
    {
      move: {
        name: "leer",
        url: "https://pokeapi.co/api/v2/move/43/",
      },
    },
    {
      move: {
        name: "iron-tail",
        url: "https://pokeapi.co/api/v2/move/231/",
      },
    },
    {
      move: {
        name: "volt-tackle",
        url: "https://pokeapi.co/api/v2/move/344/",
      },
    },
    {
      move: {
        name: "electro-ball",
        url: "https://pokeapi.co/api/v2/move/486/",
      },
    },
    {
      move: {
        name: "electroweb",
        url: "https://pokeapi.co/api/v2/move/527/",
      },
    },
  ],
};
