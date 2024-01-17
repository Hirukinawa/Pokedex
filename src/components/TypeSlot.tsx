import React from "react";

interface TypeSlotProps {
  name: string;
}

const TypeSlot: React.FC<TypeSlotProps> = ({ name }) => {
  const colors: Record<string, string> = {
    fire: "orange",
    water: "#4592c4",
    grass: "#9bcc50",
    poison: "#b97fc9",
    dragon: "#53a4cf",
    fairy: "pink",
    bug: "#729f3f",
    normal: "#a4acaf",
    flying: "cyan",
    fighting: "brown",
    ground: "#f7de3f",
    rock: "#a38c21",
    electric: "yellow",
    steel: "#9eb7b8",
    ice: "#51c4e7",
    psychic: "magenta",
    ghost: "#7b62a3",
    dark: "#707070",
  };

  const backgroundColor = colors[name];

  return (
    <div className="type" style={{ backgroundColor }}>
      <p>{name.toUpperCase()}</p>
    </div>
  );
};

export default TypeSlot;
// <div style={{ backgroundColor, width:"85px", height:"30px", display:"flex", alignItems:"center", justifyContent:"center" , margin: '5px', borderRadius: '5px' }}>
