/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, PokemonResult } from "../../App";
import Card from "../Card";
import { useEffect, useState } from "react";
import {
  getPokemons,
  getMorePokemonAPI,
  getUnityPokemon,
} from "../../service/Axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState<PokemonResult[]>([]);
  const [pokemonsUnity, setPokemonsUnity] = useState<PokemonAPI[]>([]);
  const [load, setLoad] = useState(false);
  const firstPokemon = 1;

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
        const pokemonResult = await getUnityPokemon(i + firstPokemon);
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

  async function getMorePokemon() {
    if (load) {
      console.log("Já solicitou");
    } else {
      setLoad(true);
      const list: PokemonAPI[] = [];
      try {
        const pkmnsApi = await getMorePokemonAPI();

        for (let i = 0; i < pkmnsApi.length; i++) {
          if (pokemonsUnity.length + list.length < 1025) {
            const pk: PokemonResult = pkmnsApi[i];
            const str1 = pk.url.replace(
              "https://pokeapi.co/api/v2/pokemon/",
              ""
            );
            const str2 = str1.replace("/", "");
            const num = Number(str2);
            const pokemonRes = await getUnityPokemon(
              num + pokemonsUnity.length + firstPokemon - 1
            );

            list.push(pokemonRes);
          }
        }
      } catch (error) {
        console.log(error);
      }
      setPokemonsUnity((prevList) => [...prevList, ...list]);
      setLoad(false);
    }
  }

  function populaPkmn() {
    const pkmns = pokemonsUnity.map((pokemon: PokemonAPI) => {
      return <Card key={pokemon.id} fav={false} pokemon={pokemon} />;
    });
    return pkmns;
  }

  const onHandleClick = () => {
    navigate(`/favoritos`);
  };

  return (
    <div className="bgWhite">
      <div className="row">
        <h1>Pokédex foda</h1>
        <button className="loadMore" onClick={onHandleClick}>
          Favoritos
        </button>
      </div>
      <div className="pkmns">
        {pokemonsUnity.length === 0 ? <p>Carregando...</p> : populaPkmn()}
      </div>
      <div className="columnCenter">
        {pokemonsUnity.length > 0 && pokemonsUnity.length < 1025 && (
          <button className="loadMore" onClick={getMorePokemon}>
            <p>{load ? "Carregando..." : "Carregar mais"}</p>
          </button>
        )}
      </div>
    </div>
  );
}
