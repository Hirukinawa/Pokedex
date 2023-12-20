/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export async function getPokemons() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=27`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    console.log(error);
  }
}
