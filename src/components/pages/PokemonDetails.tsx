import React from "react";
import { useLocation } from "react-router-dom";
import { Pokemon } from "../../App";
import "../../App.css";

const PokemonDetails: React.FC = () => {
  const location = useLocation();
  const pokemon: Pokemon = location.state?.pokemon || {
    id: 0,
    name: "Unknown",
  };

  const pokeNumber = formataNumber(pokemon.id);

  function formataNumber(num: number): string {
    if (num < 10 && num > 0) {
      return `00${num}`;
    } else if (num < 100) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }

  const link: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNumber}.png`;

  return (
    <div className="bgWhite">
      <h1>
        {pokemon.name} - {pokeNumber}
      </h1>
      <div className="row">
        <img
          src={link}
          width="450px"
          height="auto"
          alt={`${pokemon.name} - ${pokeNumber}`}
        />
        <div className="column">
          <h2>Descrição</h2>
          <p>
            O Pokémon faz coisas que um Pokémon deveria fazer, já que ele é um
            Pokémon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
