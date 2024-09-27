import { useState } from "react"
import { PokemonAPI, TypeSlotType } from "../../App"
import { capitalize, getRandomNumber } from "../../Utils/Utils";
import { getUnityPokemon } from "../../service/Axios";
import TypeSlot from "../TypeSlot";

export default function Quiz() {

    const [pokemon, setPokemon] = useState<PokemonAPI | undefined>(undefined);
    const [minNumber, setMinNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(150);
    const [showImage, setShowImage] = useState<Boolean>(false);
    const [link, setLink] = useState<string>("");

    function handleChange() {
        setShowImage(!showImage);
    }

    async function handleClick() {
        const sortedNumber = getRandomNumber(minNumber, maxNumber);
        const pokemonResult: PokemonAPI = await getUnityPokemon(sortedNumber)
        setPokemon(pokemonResult);
        setLink(pokemonResult.sprites.front_default.replace("pokemon/","pokemon/other/official-artwork/"));
    }

    const handleChangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinNumber(Number(event.target.value));
    };
    
    const handleChangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxNumber(Number(event.target.value));
    };

    const pokemonResult = () => {
        if (pokemon) {
            return <div className="column">
                <h1>{capitalize(pokemon.name)}</h1>
                <div className="row">{types()}</div>
            </div>
        }

        return <h1>...</h1>;
    }

    function types() {
        if (pokemon) {
        const types = pokemon.types.map((typeSlot: TypeSlotType) => {
          return <TypeSlot key={typeSlot.slot} name={typeSlot.type.name} />;
        });
        return types;
      }
    }

    const imagePokemon = () => {
        return <img id="image-pokemon" style={{filter: showImage ? 'brightness(1)' : 'brightness(0)'}} src={link} alt={pokemon!.name} />
    }

    return (
        <div className="bgWhite">
            <h1>Desenhe o Pokémon</h1>
            {pokemonResult()}
            <h2>Defina o menor e o maior</h2>
            <div className="row">
                <input type="number" min={0} max={maxNumber - 1} value={minNumber} onChange={handleChangeMin}  />
                <input type="number" min={minNumber + 1} max={1000} value={maxNumber} onChange={handleChangeMax} />
            </div>
            <button onClick={handleClick}>Sortear pokémon</button>
            <label htmlFor="image">
                <input onChange={handleChange} type="checkbox" id="image" />
                Revelar aparência
            </label>
            {pokemon && (imagePokemon())}
        </div>
    )
}