/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { MoveAPI } from "../App";
import TypeSlot from "./TypeSlot";
import { formataName } from "../Utils/Utils";
import { useNavigate } from "react-router-dom";

interface MoveSlotProps {
  move: MoveAPI;
}

const MoveSlot: React.FC<MoveSlotProps> = ({ move }) => {
  const link = `http://www.serebii.net/attackdex/type/${
    move.damage_class.name === "status" ? "other" : move.damage_class.name
  }.png`;

  const navigate = useNavigate();

  const onHandleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/movimento/${move.name}`, { state: { move } });
  };

  return (
    <tr>
      <td id="moveName" onClick={onHandleClick}>{`${formataName(move.name)}`}</td>
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
  );
};

export default MoveSlot;
//http://www.serebii.net/attackdex/type/physical.png
//http://www.serebii.net/attackdex/type/special.png
//http://www.serebii.net/attackdex/type/other.png
