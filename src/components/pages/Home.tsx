/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonResult } from "../../App";
import Card from "../Card";
import "../../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getPokemons } from "../../service/Axios";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=26"
      );
      const data = response.data;
      const results: [] = data.results;
      setPokemons(getPokemons());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  function populaPkmn() {
    console.log(pokemons);

    const pkmns = pokemons.map((pokemon: PokemonResult) => {
      console.log(pokemon);
      const url: string = pokemon.url;
      const str1 = url.replace("https://pokeapi.co/api/v2/pokemon/", "");
      const num = str1.replace("/", "");
      const name = pokemon.name;
      const nameCapitalize = name.charAt(0).toUpperCase() + name.slice(1);
      return <Card key={Number(num)} id={Number(num)} name={nameCapitalize} />;
    });
    return pkmns;
  }

  return (
    <div className="bgWhite">
      <h1>Pokédex foda</h1>
      <div className="pkmns">
        {pokemons.length === 0 ? <p>Carregando...</p> : populaPkmn()}
      </div>
    </div>
  );
}
