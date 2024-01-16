/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI, TypeSlotType } from "../App";
import { useNavigate } from "react-router-dom";
import TypeSlot from "./TypeSlot";

interface CardProps {
  fav: boolean;
  pokemon: PokemonAPI;
}

export default function Card({ fav, pokemon }: CardProps) {
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

  const link: string = pokemon.sprites.front_default.replace(
    "pokemon/",
    "pokemon/other/official-artwork/"
  );

  const onHandleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/pokemon/${pokemon.id}`, { state: { pokemon, fav } });
  };

  function types() {
    const types = pokemon.types.map((typeSlot: TypeSlotType) => {
      return (
        <TypeSlot key={typeSlot.slot} name={typeSlot.type.name.toUpperCase()} />
      );
    });
    return types;
  }

  return (
    <>
      <div onClick={onHandleClick} className="card">
        <div className="image">
          <img src={link} width="110px" height="110px" />
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
