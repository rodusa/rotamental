<script>
    import ObjectiveForm from "$lib/ObjectiveForm.svelte"; 
    import Objective from "$lib/Objective.svelte"; 
    import {objectives} from "../../stores/objectiveStore"
</script>
<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Objetivo de Estudo</h1>
    <ObjectiveForm/>
    {#each $objectives as item}
        <Objective objective={item} index={item.id} />
    {/each}
</main>