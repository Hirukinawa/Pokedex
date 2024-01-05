/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const apiUrl = "https://pokeapi.co/api/v2";
const apiLink = "http://localhost:5500/api";

export async function getPokemons() {
  try {
    const response = await axios.get(`${apiUrl}/pokemon?limit=10`);
    const data = response.data;
    const results: [] = data.results;
    return results;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao obter dados dos Pokémon");
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
export async function getUsers() {
  try {
    const response = await axios.get(apiLink);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Deu erro");
  }
}

export async function postUser(name: string, avatar: string, city: string) {
  const newUser = {
    name: name,
    avatar: avatar,
    city: city,
  };
  axios
    .post(apiLink, newUser)
    .then()
    .catch((error) => console.log(error));
}

export async function updateUser(
  id: number,
  name: string,
  avatar: string,
  city: string
) {
  const newUser = {
    name: name,
    avatar: avatar,
    city: city,
  };
  return axios.put(`${apiLink}/${id}`, newUser).then((response) => {
    return response.data;
  });
}

export async function deleteUser(id: number) {
  return axios.delete(`${apiLink}/${id}`).then((response) => {
    return response.data;
  });
}
