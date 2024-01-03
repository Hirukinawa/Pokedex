/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export async function getPokemons() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=150`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados dos Pokémon");
  }
}

export async function getUnityPokemon(num: number) {
  try {
    const response = await axios.get(`${apiUrl}/pokemon/${num}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados do Pokémon");
  }
}

export async function getMorePokemonAPI() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=30`);
    const data = response.data;
    const results: [] = data.results;
    //return species;
    return results;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados de mais Pokémon");
  }
}

export async function getUrlResult(url: string) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter dados da habilidade");
  }
}
