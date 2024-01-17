import {
  Home,
  MoveAPI,
  MoveSlotMove,
  OtherSprites,
  PokemonAPI,
  Sprites,
} from "../App";
import { postFavPokemon } from "../service/Axios";

export function formataName(word: string) {
  const str1 = word.replace("-", " ");
  return str1.charAt(0).toUpperCase() + str1.slice(1);
}

export function formataNumber(num: number): string {
  if (num < 10 && num > 0) {
    return `00${num}`;
  } else if (num < 100) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

export function formataMove(move: MoveAPI) {
  //let str1;

  const str1 = move.effect_entries[0].effect.replace(
    "$effect_chance",
    `${move.effect_chance}`
  );

  return str1;
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export async function postPokemon(pokemon: PokemonAPI) {
  const spritesHome: Home = pokemon.sprites.other.home;
  const otherSprites: OtherSprites = { home: spritesHome };
  const sprites: Sprites = {
    front_default: pokemon.sprites.front_default,
    front_shiny: pokemon.sprites.front_shiny,
    other: otherSprites,
  };

  const pokemonMoves = pokemon.moves.map((moveSlot: MoveSlotMove) => {
    return {
      move: {
        name: moveSlot.move.name,
        url: moveSlot.move.url,
      },
    };
  });

  console.log(pokemonMoves);

  const newPokemon: PokemonAPI = {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types,
    abilities: pokemon.abilities,
    sprites: sprites,
    stats: pokemon.stats,
    moves: pokemonMoves,
    species: pokemon.species,
  };

  await postFavPokemon(newPokemon);
}
