import { Home, MoveSlotMove, OtherSprites, PokemonAPI, Sprites } from "../App";
import { postFavPokemon } from "../service/Axios";

export function formataName(word: string) {
  const str1 = word.replace("-", " ");
  return str1.charAt(0).toUpperCase() + str1.slice(1);
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
  };

  await postFavPokemon(newPokemon);
}
