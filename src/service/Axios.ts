/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export async function getPokemons() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=151`);
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

export async function getPokemonsJohto() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=100`);
    const data = response.data;
    //const species: [] = data.pokemon_species;
    const results: [] = data.results;
    //return species;
    return results;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados dos Pokémon de Johto");
  }
}

export async function getPokemonsHoenn() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=135`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao obter dados dos Pokémon de Hoenn");
  }
}
