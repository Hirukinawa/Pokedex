/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, PokemonResult } from "../../App";
import Card from "../Card";
import "../../App.css";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsHoenn, getPokemonsJohto, getUnityPokemon } from "../../service/Axios";

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [pokemonsUnity, setPokemonsUnity] = useState<PokemonAPI[]>([]);
  const [johto, setJohto] = useState(false);
  const [hoenn, setHoenn] = useState(false);
  const [sinnoh, setSinnoh] = useState(false);
  const [unova, setUnova] = useState(false);
  const [kalos, setKalos] = useState(false);
  const [alola, setAlola] = useState(false);
  const [galar, setGalar] = useState(false);
  const [paldea, setPaldea] = useState(false);

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

        const pokemonResult = await getUnityPokemon(i+1);
        list.push(pokemonResult);

      }
      // for (const pokemon of pokemons) {
      //   //const url: string = pokemon.url;
      //   //"https://pokeapi.co/api/v2/pokemon-species/152/"
      //   const str1 = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon", "");
      //   const str2 = str1.replace("-species", "");
      //   const str3 = str2.replace("/", "");
      //   const num = str3.replace("/", "");
      //   const num2 = Number(num);
      //   const pokemonResult = await getUnityPokemon(num2);

      //   list.push(pokemonResult);
      // }
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

  const getPokemonJohto = async () => {
    try {
      if (!johto) {
        const pkmnsApi = await getPokemonsJohto();
        console.log(pkmnsApi);
        setPokemons((prevPokemons) => [...prevPokemons, ...pkmnsApi]);
        setJohto(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonHoenn = async () => {
    try {
      if (!hoenn) {
        const pkmnsApi = await getPokemonsHoenn();
        console.log(pkmnsApi);
        setPokemons((prevPokemons) => [...prevPokemons, ...pkmnsApi]);
        setHoenn(true);
      }
    } catch (error) {
      console.log(error);
    }

  }

  function populaPkmn() {
    const pkmns = pokemonsUnity.map((pokemon: PokemonAPI) => {
      const name = pokemon.name;
      const nameCapitalize = name.charAt(0).toUpperCase() + name.slice(1);
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
      {(pokemonsUnity.length > 0 && !johto) && <button onClick={getPokemonJohto}>Carregar mais</button>}
      {(pokemonsUnity.length > 250 && !hoenn) && <button onClick={getPokemonHoenn}>Carregar mais</button>}
      {(pokemonsUnity.length > 386 && !sinnoh) && <button>Carregar mais</button>}
      {(pokemonsUnity.length > 493 && !unova) && <button>Carregar mais</button>}
      {(pokemonsUnity.length > 649 && !kalos) && <button>Carregar mais</button>}
      {(pokemonsUnity.length > 721 && !alola) && <button>Carregar mais</button>}
      {(pokemonsUnity.length > 809 && !galar) && <button>Carregar mais</button>}
      {(pokemonsUnity.length > 905 && !paldea) && <button>Carregar mais</button>}
    </div>
  );
}
