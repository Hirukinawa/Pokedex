/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { getFavPokemons } from "../../service/Axios";
import { PokeList, PokemonAPI } from "../../App";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();

  const [favPokes, setFavPokes] = useState<PokeList>();

  useEffect(() => {
    getPokeAPI();
  }, []);

  const getPokeAPI = async () => {
    try {
      const pkmns = await getFavPokemons();
      setFavPokes(pkmns);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleClick = () => {
    navigate(`/`);
  };

  const takeFavPoke = favPokes?.pkmnsFav.map((pokemon: PokemonAPI) => {
    return <Card key={pokemon.id} fav={true} pokemon={pokemon} />;
  });

  return (
    <div className="bgWhite">
      <div className="row">
        <h1>Pokémons favoritos</h1>
        <button className="loadMore" onClick={onHandleClick}>
          Pokédex
        </button>
      </div>
      <div className="pkmns">{takeFavPoke}</div>
    </div>
  );
}
