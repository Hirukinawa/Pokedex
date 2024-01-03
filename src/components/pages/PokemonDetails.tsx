/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AbilityDescription,
  PokemonAPI,
  Type,
  TypeDamage,
  TypeSlotType,
} from "../../App";
import "../../App.css";
import TypeSlot from "../TypeSlot";
import { getUrlResult } from "../../service/Axios";

const PokemonDetails: React.FC = () => {
  const [shiny, setShiny] = useState(false);
  const [entries, setEntries] = useState<AbilityDescription[]>([]);
  const [fraquezas, setFraquezas] = useState<TypeDamage[]>([]);
  const [vantagens, setVantagens] = useState<Type[]>([]);
  const [doubleTo, setDoubleTo] = useState<Type[]>([]);
  const [halfTo, setHalfTo] = useState<Type[]>([]);
  const location = useLocation();
  const pokemon: PokemonAPI = location.state?.pokemon || {
    id: 0,
    name: "Unknown",
  };

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

  useEffect(() => {
    getDescriptions();
    getFraquezas();
  }, []);

  useEffect(() => {
    getResistencias();
  }, [fraquezas]);

  const getDescriptions = async () => {
    const list: AbilityDescription[] = [];
    try {
      await Promise.all(
        pokemon.abilities.map(async (slot) => {
          const descriptions = await getUrlResult(slot.ability.url);
          list.push(descriptions);
        })
      );
    } catch (error) {
      console.log(error);
    }
    setEntries(list);
  };

  const getFraquezas = async () => {
    const fraquezasList: TypeDamage[] = [];
    try {
      await Promise.all(
        pokemon.types.map(async (slot) => {
          const types = await getUrlResult(slot.type.url);
          fraquezasList.push(types);
        })
      );
    } catch (error) {
      console.log(error);
    }
    setFraquezas(fraquezasList);
  };

  function types() {
    const types = pokemon.types.map((typeSlot: TypeSlotType) => {
      return <TypeSlot name={typeSlot.type.name.toUpperCase()} />;
    });
    return types;
  }

  const handleChange = () => setShiny(!shiny);

  function getResistencias() {
    const resistencias: Type[] = [];
    const fraquezasList: Type[] = [];
    const vantagensList: Type[] = [];

    fraquezas.map((tipo: TypeDamage) => {
      tipo.damage_relations.double_damage_to.map((type: Type) => {
        if (!vantagensList.some((item) => item.name === type.name)) {
          vantagensList.push(type);
        }
      });

      tipo.damage_relations.half_damage_from.map((type: Type) => {
        if (!resistencias.some((item) => item.name === type.name)) {
          resistencias.push(type);
        }
      });

      tipo.damage_relations.double_damage_from.map((type: Type) => {
        if (!fraquezasList.some((item) => item.name === type.name)) {
          fraquezasList.push(type);
        }
      });

      if (tipo.damage_relations.no_damage_from.length > 0) {
        tipo.damage_relations.no_damage_from.map((type: Type) => {
          resistencias.push(type);
        });
      }
    });
    setDoubleTo(fraquezasList);
    setHalfTo(resistencias);
    setVantagens(vantagensList);
  }

  const getWeakness = doubleTo.map((weak: Type) => {
    console.log(doubleTo.length);
    let types = null;
    if (!halfTo.some((item) => item.name === weak.name)) {
      types = <TypeSlot name={weak.name.toUpperCase()} />;
    }
    return types;
  });

  const getResis = vantagens.map((type: Type) => {
    return <TypeSlot name={type.name.toUpperCase()} />;
  });

  const getEntries = entries.map((ent) => {
    const str1 = ent.name.charAt(0).toUpperCase() + ent.name.slice(1);
    const str2 = str1.replace("-", " ");
    let ind: number = 0;
    for (let i = 0; i < ent.effect_entries.length; i++) {
      if (ent.effect_entries[i].language.name === "en") {
        ind = i;
      }
    }
    return (
      <p>
        <b>{str2}</b>: {ent.effect_entries[ind].effect}
      </p>
    );
  });

  return (
    <div className="bgWhite">
      <h1>
        {pokemon.name} - {pokeNumber}
      </h1>
      <div className="row">
        <div className="column">
          <label htmlFor="">
            <input type="checkbox" onChange={handleChange} />
            Shiny
          </label>
          <img
            src={
              shiny
                ? pokemon.sprites.other.home.front_shiny
                : pokemon.sprites.other.home.front_default
            }
            width="450px"
            height="auto"
            alt={`${pokemon.name} - ${pokeNumber}`}
          />
          <div className="row">{types()}</div>
        </div>
        <div className="column">
          <h2>Descrição</h2>
          <p>
            O Pokémon faz coisas que um Pokémon deveria fazer, já que ele é um
            Pokémon.
          </p>
          <h2>Habilidades</h2>
          {getEntries}
          <h2>Vantagens</h2>
          <div className="rowTypes">
            {vantagens.length > 0 ? getResis : "Carregando..."}
          </div>
          <h2>Fraquezas</h2>
          <div className="rowTypes">
            {doubleTo.length > 0 ? getWeakness : "Carregando..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
