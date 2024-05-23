import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Pokemones = () => {
    const navigate = useNavigate();
    const pokemones = useContext(PokemonContext);
    const [selectedPokemon, setSelectedPokemon] = useState("");

    return (
        <>
        <div className="pokemones-body">
            <h1>Selecciona un pokemon</h1>
            <select
                className="form-select"
                aria-label="Pokemones"
                onChange={(e) => setSelectedPokemon(e.target.value)}
            >
                <option value="">Pokemones</option>
                {pokemones &&
                    pokemones.map((pokemon, index) => (
                        <option key={index} value={pokemon.name}>
                            {pokemon.name}
                        </option>
                    ))}
            </select>
            <br></br>
            <button
                onClick={() => navigate(`/pokemon/${selectedPokemon}`)}
                className="d-grid gap-2"
                size="lg"
                disabled={!selectedPokemon}
            >
                Ver Detalle
            </button>
        </div>
        </>
    );
};

export default Pokemones;