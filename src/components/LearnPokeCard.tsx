import React from "react";
import { formataNumber } from "../Utils/Utils";

interface LearnPokeCardProps {
  id: number;
}

const LearnPokeCard: React.FC<LearnPokeCardProps> = ({ id }) => {
  const link = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formataNumber(
    id
  )}.png`;
  return (
    <div className="movecard">
      <img src={link} />
    </div>
  );
};

export default LearnPokeCard;

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
//https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
