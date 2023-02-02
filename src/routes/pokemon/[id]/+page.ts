import type { PageLoad } from './$types';

export const load: PageLoad = ({ fetch, params }) => {

    const fetchPokemon = async (id:string) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = res.json();
        return data
    }

    return {
        pokemon: fetchPokemon(params.id)
    }
}