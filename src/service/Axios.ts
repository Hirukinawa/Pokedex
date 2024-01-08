/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { PokemonAPI } from "../App";

const apiUrl = "https://pokeapi.co/api/v2";
const apiLink = "http://localhost:5500/api";

export async function getPokemons() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=30`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    alert(error);
    console.log(error);
    throw new Error("Erro ao obter dados dos Pokémon");
  }
}

export async function getMorePokemonAPI() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=70`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    alert(error);
    console.log(error);
    throw new Error("Erro ao obter dados de mais Pokémon");
  }
}

export async function getUnityPokemon(num: number) {
  try {
    const response = await axios.get(`${apiUrl}/pokemon/${num}`);
    const data = response.data;
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
    throw new Error("Erro ao obter dados do Pokémon");
  }
}

export async function getUrlResult(url: string) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter dados da habilidade");
  }
}

export async function getFavPokemons() {
  try {
    const response = await axios.get(apiLink);
    const data = response.data;
    return data;
  } catch (error) {
    alert(error);
    console.log(error);
    throw new Error("Erro ao obter pokemon favoritos");
  }
}

export async function postFavPokemon(pokemon: PokemonAPI) {
  axios
    .post(apiLink, pokemon)
    .then()
    .catch((error) => {
      alert(error);
      console.log(error);
      throw new Error("Erro ao favoritar pokémon");
    });
}

export async function deleteFavPokemon(id: number) {
  return axios
    .delete(`${apiLink}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
}
