<script lang="ts">
    import {pokemon, type Pokemon} from "../stores/pokedex"
    import PokemanCard from "../component/pokemonCard.svelte";

    let searchTerm = "";
    let filterdPokemon: Pokemon[] = [];

    $: {
        if(searchTerm) {
            filterdPokemon = $pokemon.filter(pokeman => pokeman.
            name.includes(searchTerm.toLowerCase()));
        }else {
            filterdPokemon = [...$pokemon]
        }
    }
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<input class="w-full rounded-md text-l p-3 border-2 border-grey-200" type = "text" bind:value={searchTerm} placeholder="Search Pokemon">

<h1 class="text-4xl text-center my-8 uppercase">
    SvelteKit Pokedex
</h1>

<div class=" py-4 grid gap-4 md:grid-cols-2 grid-cols-1">

    {#each filterdPokemon as pokeman}
    <PokemanCard pokeman={pokeman}/>
    {/each}

</div>