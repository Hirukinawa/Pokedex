import React from "react";
import { formataName } from "../App";

interface MoveSlotProps {
  name: string;
}

const MoveSlot: React.FC<MoveSlotProps> = ({ name }) => {
  return (
    <div>
      <p>{formataName(name)}</p>
    </div>
  );
};

export default MoveSlot;
