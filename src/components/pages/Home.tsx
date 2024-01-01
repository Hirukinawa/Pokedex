/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, PokemonResult } from "../../App";
import Card from "../Card";
import "../../App.css";
import { useEffect, useState } from "react";
//import axios from "axios";
import { getPokemons, getUnityPokemon } from "../../service/Axios";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [pokemonsTypes, setPokemonsTypes] = useState<PokemonAPI[]>([]);

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
      for (const pokemon of pokemons) {
        const url: string = pokemon.url;
        const str1 = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
        const num = str1.replace("/", "");
        const num2 = Number(num);
        const pokemonResult = await getUnityPokemon(num2);
        list.push(pokemonResult);
      }
    } catch (error) {
      console.log(error);
    }
    setPokemonsTypes(list);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    // Chama getTypes quando pokemons é atualizado
    if (pokemons.length > 0) {
      getTypes();
    }
  }, [pokemons]);

  function populaPkmn() {
    const pkmns = pokemonsTypes.map((pokemon: PokemonAPI) => {
      const name = pokemon.name;
      const nameCapitalize = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={nameCapitalize}
          abilities={pokemon.abilities}
          types={pokemon.types}
        />
      );
    });
    return pkmns;
  }

  return (
    <div className="bgWhite">
      <h1>Pokédex foda</h1>
      <div className="pkmns">
        {pokemonsTypes.length === 0 ? <p>Carregando...</p> : populaPkmn()}
      </div>
    </div>
  );
}
