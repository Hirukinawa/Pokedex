/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, TypeSlotType } from "../App";
import { useNavigate } from "react-router-dom";
import TypeSlot from "./TypeSlot";

export default function Card(pokemon: PokemonAPI) {
  const navigate = useNavigate();

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

  const onHandleClick = () => {
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } });
  };

  function types() {
    const types = pokemon.types.map((typeSlot: TypeSlotType) => {
      return <TypeSlot name={typeSlot.type.name.toUpperCase()}/>;
    });
    return types;
  }

  return (
    <>
      <div onClick={onHandleClick} className="card">
        <div className="image">
          <img src={pokemon.sprites.other.home.front_default} width="110px" height="110px" />
        </div>
        <p>
          <b>
            {pokeNumber} - {pokemon.name.toUpperCase()}
          </b>
        </p>
        <div className="row">{types()}</div>
      </div>
    </>
  );
}
{
  /* <div className="row">
          <div className="type">Fire</div>
          <div className="type2">Flying</div>
        </div> */
}
