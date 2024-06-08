/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from "react-router-dom";
import {
  AbilityDescription,
  EvolutionChain,
  Evolves,
  MoveAPI,
  MoveSlotMove,
  PokemonAPI,
  PokemonSpecie,
  Type,
  TypeDamage,
  TypeSlotType,
} from "../../App";
import "../../App.css";
import TypeSlot from "../TypeSlot";
import {
  getUrlResult,
} from "../../service/Axios";
import BarChart from "../BarChart";
import MoveSlot from "../MoveSlot";
import { formataName, formataNumber } from "../../Utils/Utils";
import { PokemonDefault } from "../PokemonDefault";
import MiniCard from "../MiniCard";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
//import LateralBarChart from "../LateralBarChart";

const PokemonDetails: React.FC = () => {
  const location = useLocation();

  async function getPokemon(nomePoke: string | undefined): Promise<PokemonAPI> {
    const pokeApi: PokemonAPI = await getUrlResult(
      `https://pokeapi.co/api/v2/pokemon/${nomePoke}`
    );
    return pokeApi;
  }
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonAPI | undefined>(
    location.state?.pokemon
  );
  const fetchPokemon = async () => {
    try {
      const dadosPokemon: PokemonAPI = await getPokemon(name);
      setPokemon(dadosPokemon);
    } catch (error) {
      console.error("Erro ao buscar dados do Pokémon:", error);
    }
  };
  useEffect(() => {
    if (!location.state?.pokemon) {
      fetchPokemon();
    }
  }, [location.state?.pokemon]);
  useEffect(() => {
    setPokemon(location.state?.pokemon);
  }, [name]);

  const [shiny, setShiny] = useState(false);

  const [pokeMoves, setPokeMoves] = useState<MoveAPI[]>([]);

  const [entries, setEntries] = useState<AbilityDescription[]>([]);

  const [fraquezas, setFraquezas] = useState<TypeDamage[]>([]);
  const [vantagens, setVantagens] = useState<Type[]>([]);

  const [doubleTo, setDoubleTo] = useState<Type[]>([]);
  const [halfTo, setHalfTo] = useState<Type[]>([]);

  const [pokeChain, setPokeChain] = useState<PokemonAPI[]>([]);

  useEffect(() => {
    getMoves();
    getDescriptions();
    getFraquezas();
    getSpecie();
  }, [pokemon]);

  useEffect(() => {
    getResistencias();
  }, [fraquezas]);

  const pokeNumber = formataNumber(
    pokemon !== undefined ? pokemon!.id : PokemonDefault.id
  );

  const frontArt: string =
    pokemon === undefined
      ? PokemonDefault.sprites.front_default.replace(
          "pokemon/",
          "pokemon/other/official-artwork/"
        )
      : pokemon.sprites.front_default.replace(
          "pokemon/",
          "pokemon/other/official-artwork/"
        );

  const shinyArt: string =
    pokemon === undefined
      ? PokemonDefault.sprites.front_default.replace(
          "pokemon/",
          "pokemon/other/official-artwork/"
        )
      : pokemon.sprites.front_default.replace(
          "pokemon/",
          "pokemon/other/official-artwork/shiny/"
        );

  const getMoves = useCallback(async () => {
    const movePoke: MoveAPI[] = [];
    await Promise.all(
      pokemon!.moves.map(async (move: MoveSlotMove) => {
        const moveApi = await getUrlResult(move.move.url);
        movePoke.push(moveApi);
      })
    );
    setPokeMoves(movePoke);
  }, [pokemon?.moves]);

  const getDescriptions = useCallback(async () => {
    const list: AbilityDescription[] = [];
    try {
      await Promise.all(
        pokemon!.abilities.map(async (slot) => {
          const descriptions = await getUrlResult(slot.ability.url);
          list.push(descriptions);
        })
      );
    } catch (error) {
      console.log(error);
    }
    setEntries(list);
  }, [pokemon?.abilities]);

  const getFraquezas = useCallback(async () => {
    const fraquezasList: TypeDamage[] = [];
    try {
      await Promise.all(
        pokemon!.types.map(async (slot) => {
          const types = await getUrlResult(slot.type.url);
          fraquezasList.push(types);
        })
      );
    } catch (error) {
      console.log(error);
    }
    setFraquezas(fraquezasList);
  }, [pokemon?.types]);

  function switchUrl(link: string) {
    return link.replace("-species", "");
  }

  async function getSpecie() {
    const pokeList: PokemonAPI[] = [];
    const pokemonSpecie: PokemonSpecie = await getUrlResult(
      pokemon!.species.url
    );
    const pokemonChain: EvolutionChain = await getUrlResult(
      pokemonSpecie.evolution_chain.url
    );
    const firstForm: PokemonAPI = await getUrlResult(
      switchUrl(pokemonChain.chain.species.url)
    );
    pokeList.push(firstForm);

    if (pokemonChain.chain.evolves_to.length > 0) {
      await Promise.all(
        pokemonChain.chain.evolves_to.map(async (poke: Evolves) => {
          const pokeUrl: PokemonAPI = await getUrlResult(
            switchUrl(poke.species.url)
          );
          pokeList.push(pokeUrl);
          if (poke.evolves_to.length > 0) {
            await Promise.all(
              poke.evolves_to.map(async (pk: Evolves) => {
                const pokeUrl: PokemonAPI = await getUrlResult(
                  switchUrl(pk.species.url)
                );
                pokeList.push(pokeUrl);
              })
            );
          }
        })
      );
    }
    setPokeChain(pokeList);
  }

  const getSpecies = pokeChain.map((poke: PokemonAPI) => {
    return <MiniCard pokemon={poke} />;
  });

  const types = useMemo(() => {
    return pokemon?.types.map((typeSlot: TypeSlotType) => (
      <TypeSlot key={typeSlot.slot} name={typeSlot.type.name} />
    ));
  }, [pokemon?.types]);

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
    let types = null;
    if (!halfTo.some((item) => item.name === weak.name)) {
      types = <TypeSlot key={weak.url} name={weak.name} />;
    }
    return types;
  });

  const getResis = vantagens.map((type: Type) => {
    return <TypeSlot key={type.url} name={type.name} />;
  });

  const getEntries = entries.map((ent) => {
    let ind: number = 0;
    for (let i = 0; i < ent.effect_entries.length; i++) {
      if (ent.effect_entries[i].language.name === "en") {
        ind = i;
      }
    }
    return (
      <p>
        <b>{formataName(ent.name)}</b>:{" "}
        {ent.effect_entries.length > 0
          ? ent.effect_entries[ind].effect
          : "No data."}
      </p>
    );
  });

  const getPokeMoves = useMemo(() => {
    return pokeMoves.map((move: MoveAPI) => (
      <MoveSlot key={move.id} move={move} />
    ));
  }, [pokeMoves]);

  return (
    <div className="bgWhite">
      {pokemon === undefined ? (
        <h1>Não foi possível encontrar esse pokémon</h1>
      ) : (
        <div id="pkDetails">
          <h1>
            {pokemon!.species.name.charAt(0).toUpperCase() +
              pokemon!.species.name.slice(1)}{" "}
            - {pokeNumber}
          </h1>
          <div className="row">
            <div id="detailsLeft" className="column">
              <label htmlFor="shinyInput">
                <input id="shinyInput" type="checkbox" onChange={handleChange} />
                Shiny
              </label>
              <img
                id="pokeImg"
                src={shiny ? shinyArt : frontArt}
                alt={`${pokemon!.name} - ${pokeNumber}`}
              />
              <div id="pokemonTypes" className="row">{types}</div>
              <BarChart stats={pokemon!.stats} />
            </div>
            <div id="detailsRight" className="column">
              <h2>Descrição</h2>
              <p>
                O Pokémon faz coisas que um Pokémon deveria fazer, já que ele
                é um Pokémon.
              </p>
              <h2>Habilidades</h2>
              {getEntries}
              <h2>Vantagens</h2>
              <div className="rowTypes">
                {vantagens.length > 0
                  ? getResis
                  : vantagens.length < 1
                  ? "Não possui"
                  : "Carregando..."}
              </div>
              <h2>Fraquezas</h2>
              <div className="rowTypes">
                {doubleTo.length > 0 ? getWeakness : "Carregando..."}
              </div>
            </div>
          </div>
          {pokeChain.length > 1 && (
            <div className="chain">
              <h2>Evoluções</h2>
              <div className="chainRow">{getSpecies}</div>
            </div>
          )}
          <h2>Movimentos</h2>
          <div className="table-container">
            <table>
              <tr>
                <th>Golpe</th>
                <th>Tipo</th>
                <th>Poder</th>
                <th>Categoria</th>
                <th>Precisão</th>
                <th>PP</th>
              </tr>
              {getPokeMoves}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
