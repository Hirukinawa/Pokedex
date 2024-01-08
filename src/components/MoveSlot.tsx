import React from "react";
import { formataName } from "../App";

interface MoveSlotProps {
  name: string;
}

const MoveSlot: React.FC<MoveSlotProps> = ({ name }) => {
  return (
    <div className="column">
      <div className="move">
        <p>
          <b>{formataName(name)}</b>
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default MoveSlot;
