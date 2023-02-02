<script lang="ts">
	import { each } from "svelte/internal";


    export let data

    let pokemon = data.pokemon
    let height = pokemon.height
    let weight = pokemon.weight
    let types = pokemon.types

</script>

<div class="flex flex-col items-center">
    <h1 class="text-4xl text-center my-8 uppercase">
        {pokemon.name}
    </h1>

    <div>
        Type :
        {#each types as type}
        <strong class="border-2 rounded-md text ">
            {type.type.name.toUpperCase()}
        </strong>
        {/each}
        | Height : <strong>{height}</strong>
        | Weight : <strong>{weight}</strong>
    </div>

    <img class= "card-image w-40 h-40" src={pokemon.sprites['front_default']}
    alt={pokemon.name}
    />
</div>