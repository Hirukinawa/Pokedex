/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pokemon } from "../../App";
import "../../App.css";

export default function PokemonDetails(pokemon: Pokemon) {
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
        <img src={link} width="450px" height="auto" />
        <div className="column">
          <h2>Descrição</h2>
          <p>
            O pokemon faz coisas que um pokemon deveria fazer, já que ele é um
            pokemon.
          </p>
        </div>
      </div>
    </div>
  );
}
