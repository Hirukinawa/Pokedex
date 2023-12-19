/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pokemon } from "../App";
import { useNavigate } from "react-router-dom";

export default function Card(pokemon: Pokemon) {
  const navigate = useNavigate();

  function formataNumber(num: number): string {
    if (num < 10 && num > 0) {
      return `00${num}`;
    } else if (num < 100) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  }
  const link: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formataNumber(
    pokemon.id
  )}.png`;

  const onHandleClick = () => {
    //alert(`Pokemon ${formataNumber(pokemon.id)}: ${pokemon.name}`);
    navigate(`/pokemon`);
  };

  return (
    <>
      <div onClick={onHandleClick} className="card">
        <div className="image">
          <img src={link} width="100px" height="100px" />
        </div>
        <p>
          <b>{pokemon.name}</b>
        </p>
        <div className="row">
          <div className="type">Fire</div>
          <div className="type2">Flying</div>
        </div>
      </div>
    </>
  );
}
