/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export async function getApiTeste() {
  const response = await axios.get("https://api-0632.onrender.com/");
  return response.data;
}

export async function postApiTeste() {
  const response = await axios.post("https://api-0632.onrender.com/post");
  return response.data;
}

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
