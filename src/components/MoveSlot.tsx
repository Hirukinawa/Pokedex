import React from "react";
import { MoveAPI } from "../App";
import TypeSlot from "./TypeSlot";
import { formataName } from "../Utils/Utils";

interface MoveSlotProps {
  move: MoveAPI;
}

const MoveSlot: React.FC<MoveSlotProps> = ({ move }) => {
  const link = `http://www.serebii.net/attackdex/type/${
    move.damage_class.name === "status" ? "other" : move.damage_class.name
  }.png`;

  return (
    <tr>
      <td>{`${formataName(move.name)}`}</td>
      <td>
        <div className="typeTd">
          {<TypeSlot name={move.type.name.toUpperCase()} />}
        </div>
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
