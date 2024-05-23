import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemones, setPokemones] = useState([]);

    const getData = async () => {
        const url = `${import.meta.env.VITE_URL}pokemon?limit=151`; 
        const response = await fetch(url);
        const resultado = await response.json();
        setPokemones(resultado.results);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <PokemonContext.Provider value={pokemones}>
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;