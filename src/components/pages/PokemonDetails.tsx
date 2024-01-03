import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { PokemonAPI, TypeSlotType } from "../../App";
import "../../App.css";
import TypeSlot from "../TypeSlot";

const PokemonDetails: React.FC = () => {
  const [shiny, setShiny] = useState(false)
  const location = useLocation();
  const pokemon: PokemonAPI = location.state?.pokemon || {
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

  //const link: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeNumber}.png`;
  //const link = shiny ? pokemon.sprites.other.home.front_shiny : pokemon.sprites.other.home.front_default

  function types() {
    const types = pokemon.types.map((typeSlot: TypeSlotType) => {
      return (
        <TypeSlot name={typeSlot.type.name.toUpperCase()} />
      );
    });
    return types;
  }

  const handleChange = () => setShiny(!shiny)

  return (
    <div className="bgWhite">
      <h1>
        {pokemon.name} - {pokeNumber}
      </h1>
      <div className="row">
        <div className="column">
          <label htmlFor="">
          <input type="checkbox" onChange={handleChange} />
          Shiny
          </label>
          <img
            src={shiny ? pokemon.sprites.other.home.front_shiny : pokemon.sprites.other.home.front_default}
            width="450px"
            height="auto"
            alt={`${pokemon.name} - ${pokeNumber}`}
          />
          <div className="row">{types()}</div>
        </div>
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
