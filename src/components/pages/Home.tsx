/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, PokemonResult } from "../../App";
import Card from "../Card";
import "../../App.css";
import { useEffect, useState } from "react";
import {
  getPokemons,
  getMorePokemonAPI,
  getUnityPokemon,
} from "../../service/Axios";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [pokemonsUnity, setPokemonsUnity] = useState<PokemonAPI[]>([]);

  const getPokemon = async () => {
    try {
      const pkmnsApi = await getPokemons();
      setPokemons(pkmnsApi);
    } catch (error) {
      console.log(error);
    }
  };

  const getTypes = async () => {
    const list: PokemonAPI[] = [];
    try {
      for (let i = 0; i < pokemons.length; i++) {
        const pokemonResult = await getUnityPokemon(i + 1);
        list.push(pokemonResult);
      }
    } catch (error) {
      console.log(error);
    }
    setPokemonsUnity(list);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) {
      getTypes();
    }
  }, [pokemons]);

  const getMorePokemon = async () => {
    const list: PokemonAPI[] = [];
    try {
      const pkmnsApi = await getMorePokemonAPI();

      for (let i = 0; i < pkmnsApi.length; i++) {
        const pk: PokemonResult = pkmnsApi[i];
        const str1 = pk.url.replace("https://pokeapi.co/api/v2/pokemon/", "");
        const str2 = str1.replace("/", "");
        const num = Number(str2);
        const pokemonRes = await getUnityPokemon(num + pokemonsUnity.length);

        list.push(pokemonRes);
      }
    } catch (error) {
      console.log(error);
    }
    setPokemonsUnity((prevList) => [...prevList, ...list]);
  };

  function populaPkmn() {
    const pkmns = pokemonsUnity.map((pokemon: PokemonAPI) => {
      const nameCapitalize =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      return (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={nameCapitalize}
          abilities={pokemon.abilities}
          types={pokemon.types}
          sprites={pokemon.sprites}
        />
      );
    });
    return pkmns;
  }

  return (
    <div className="bgWhite">
      <h1>Pokédex foda</h1>
      <div className="pkmns">
        {pokemonsUnity.length === 0 ? <p>Carregando...</p> : populaPkmn()}
      </div>
      {pokemonsUnity.length > 0 && (
        <button className="loadMore" onClick={getMorePokemon}>
          <p>Carregar mais</p>
        </button>
      )}
    </div>
  );
}
