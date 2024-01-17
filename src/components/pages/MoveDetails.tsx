/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from "react-router-dom";
import "../../App.css";
import React from "react";
import { MoveAPI, PokemonResult } from "../../App";
import { MoveDefault } from "../MoveDefault";
import { capitalize, formataMove, formataName } from "../../Utils/Utils";
import TypeSlot from "../TypeSlot";
import LearnPokeCard from "../LearnPokeCard";

const MoveDetails: React.FC = () => {
  const location = useLocation();
  const move: MoveAPI = location.state?.move || MoveDefault;

  const getPoke = move.learned_by_pokemon.map((poke: PokemonResult) => {
    const str1 = poke.url.replace("https://pokeapi.co/api/v2/pokemon/", "");
    const link = str1.replace("/", "");
    const id: number = Number(link);
    if (id > 1010) {
      return;
    } else {
      return <LearnPokeCard key={id} id={id} />;
    }
  });

  return (
    <div className="bgWhite">
      <h1>{formataName(move.name)}</h1>
      <div className="rowSB">
        <div className="column2">
          <div className="rowStart">
            <b>Tipo: </b> <TypeSlot name={move.type.name} />
          </div>
          <p>
            <b>Categoria: </b> {capitalize(move.damage_class.name)}
          </p>
          <p>
            <b>Poder: </b>
            {move.power !== null ? move.power : " - "}
          </p>
          <p>
            <b>Precisão: </b>
            {move.accuracy !== null ? move.accuracy : " - "}
          </p>
          <p>
            <b>PP: </b>
            {move.pp}
          </p>
        </div>
        {move.effect_entries.length > 0 && (
          <div className="column2">
            <p>
              <b>Efeito: </b> {formataMove(move)}
            </p>
          </div>
        )}
      </div>
      <h2>Aprendido por:</h2>
      <div className="chainRow">{getPoke}</div>
    </div>
  );
};

export default MoveDetails;

/*
<tr>
      <td onClick={onHandleClick}>{`${formataName(move.name)}`}</td>
      <td>
        <div className="typeTd">{<TypeSlot name={move.type.name} />}</div>
      </td>
      <td>{move.power !== null ? move.power : " - "}</td>
      <td>
        <img src={link}></img>
      </td>
      <td>{move.accuracy ? `${move.accuracy}%` : " - "}</td>
      <td>{move.pp}</td>
    </tr>
*/
