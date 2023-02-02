import { writable, type Writable } from "svelte/store";

export const pokemon = writable<Pokemon[]>([]);

async function fetchPokemon ():Promise<void> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=500`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data:any, index:number) => {
        return <Pokemon>{
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        };
    });
    pokemon.set(loadedPokemon)
};
fetchPokemon();

export interface Pokemon {
    name: string
    id: number
    image: string
}