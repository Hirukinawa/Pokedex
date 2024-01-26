/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonAPI } from "../App";
import { useNavigate } from "react-router-dom";

interface MiniCardProps {
  pokemon: PokemonAPI;
}

export default function MiniCard({ pokemon }: MiniCardProps) {
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
    navigate(`/pokemon/${pokemon.name}`, { state: { pokemon }, replace: true });
  };

  return (
    <div className="columnCenter">
      <div onClick={onHandleClick} className="minicard">
        <div className="image">
          <img src={link} width="150px" height="150px" />
        </div>
      </div>
      <h4>{`${pokeNumber} - ${pokemon.species.name.toUpperCase()}`}</h4>
    </div>
  );
}
