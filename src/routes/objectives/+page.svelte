<script>
    import ObjectiveForm from "$lib/ObjectiveForm.svelte"; 
    import Objective from "$lib/Objective.svelte"; 
    import {objectives} from "../../stores/objectiveStore";
	
    import Chip from '$lib/chips/Chip.svelte';
	import ChipItem from '$lib/chips/ChipItem.svelte';
	let value = 1;

</script>
<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Objetivo de Estudo</h1>
    <ObjectiveForm/>
    {#each $objectives as item}
        <Objective objective={item} index={item.id} />
    {/each}
</main>


<h3>selected value<small>({value})</small></h3>

<Chip bind:value>
    <ChipItem>Concurso Público</ChipItem>
    <ChipItem>Entrevista de Emprego</ChipItem>

    <ChipItem>Exame Escolar, vestibular, etc.</ChipItem>
    <ChipItem>Exame OAB, Medicina, etc.</ChipItem>
    <ChipItem>Bolsa de Estudos</ChipItem>
    <ChipItem>Outros</ChipItem>
</Chip>
<button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button>