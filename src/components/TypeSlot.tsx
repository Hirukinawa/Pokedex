import React from "react";

interface TypeSlotProps {
  name: string;
}

const TypeSlot: React.FC<TypeSlotProps> = ({name}) => {
  const colors: Record<string, string> = {
    FIRE: "orange",
    WATER: "#4592c4",
    GRASS: "#9bcc50",
    POISON: "#b97fc9",
    DRAGON: "#53a4cf",
    FAIRY: "pink",
    BUG: "#729f3f",
    NORMAL: "#a4acaf",
    FLYING: "cyan",
    FIGHTING: "brown",
    GROUND: "#f7de3f",
    ROCK: "#a38c21",
    ELECTRIC: "yellow",
    STEEL: "#9eb7b8",
    ICE: "#51c4e7",
    PSYCHIC: "magenta",
    GHOST: "#7b62a3",
    DARK: "#707070",
  };

  const backgroundColor = colors[name];

  return (
    <div className="type" style={{ backgroundColor }}>
      <p>{name}</p>
    </div>
  )
}

export default TypeSlot;
// <div style={{ backgroundColor, width:"85px", height:"30px", display:"flex", alignItems:"center", justifyContent:"center" , margin: '5px', borderRadius: '5px' }}>
