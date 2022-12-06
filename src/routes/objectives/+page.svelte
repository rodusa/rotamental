<script>
    import {writable} from 'svelte/store';
    import { onMount } from 'svelte';
    import { objectiveItem } from '../../stores/objectiveStore';
    import ObjectiveForm from "$lib/objective/ObjectiveForm.svelte"; 
    import Objective from "$lib/objective/ObjectiveItem.svelte"; 
    import {Circle2} from 'svelte-loading-spinners';
    import {getData} from './fetcher.js';
    import { page } from '$app/stores';
    import * as utils from '../../common/utils';

    let url = $page.url;
    let showForm = false;
    //let result = {};
    let response = writable(new Promise(()=>{}));

    let hostname = `${utils.getAPIHostname(url)}/api/v1/objectives/#index`
    
    function showAddBox() {
        // RESET FORM to Blank fieldsd
        if ($objectiveItem) {
            $objectiveItem.name = '';
            $objectiveItem.area = 0;
        }
        
		showForm=true;
	}
     
    onMount(async () => {
        response = getData(hostname, true);
        //let x = await $response;
	});

	function handleMessage(event) {
        response = getData(hostname, false);
        //let x = await $response;
		console.log(event.detail.text);
	}

    //let  result = writable(new Promise(()=>[]));
 
</script>
<main class="mt-10 mx-auto max-w-4xl">
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Objetivo de Estudo</h1>
    <div class="flex flex-col text-sm mb-2">
		<button
		type="submit"
		class=" w-28 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 "
        on:click={showAddBox}
		>Adicionar2</button>
	</div>
    {#if showForm}

	<div
    class="bg-white  shadow-2xl rounded-lg overflow-hidden p-4">
        <ObjectiveForm on:message={handleMessage} bind:showForm={showForm} />
    </div>
    {/if}
    {#await $response}
       1 <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then result}
        {#each result.data as item}
            <Objective objective={item} index={item.id} on:message={handleMessage} bind:showForm={showForm} />
            
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

