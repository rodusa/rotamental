<script>
    import ObjectiveForm from "$lib/ObjectiveForm.svelte"; 
    import Objective from "$lib/Objective.svelte"; 
    import {objectives} from "../../stores/objectiveStore";
    import {Circle2} from 'svelte-loading-spinners';
    import { writable } from "svelte/store";
    import {getData} from './fetcher.js';
  
    const response = getData('https://api.rotamental.com.br/api/v1/objectives#index');
    
    //let  result = writable(new Promise(()=>[]));

    console.log($response);
</script>
<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Objetivo de Estudo</h1>
    <ObjectiveForm/>

    {#await $response}
       1 <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then result}
        {#each result.data as item}
            <Objective objective={item} index={item.id} />
            
        {/each}
    {:catch}
    <p>erro aqui</p>
    {/await}



    <!-- {#await $response}
        2<Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then data}
    <pre>  {JSON.stringify(data, null, 2)}</pre>
    {:catch}
    <p>erro aqui</p>
    {/await}
 -->

</main>

