<script>
    import {writable} from 'svelte/store';
    import { onMount } from 'svelte';
    import ObjectiveForm from "$lib/ObjectiveForm.svelte"; 
    import Objective from "$lib/Objective.svelte"; 
    import {Circle2} from 'svelte-loading-spinners';
    import {getData} from './fetcher.js';
    import { page } from '$app/stores';
    import * as utils from '../../common/utils';

    let url = $page.url;

    //let result = {};
    let response = writable(new Promise(()=>{}));

    let hostname = `${utils.getAPIHostname(url)}/api/v1/objectives/#index`
    
    //response = getData('https://api.rotamental.com.br/api/v1/objectives#index');
     
    // onMount(async () => {
    response = getData(hostname, true);
	//});

	function handleMessage(event) {
        response = getData(hostname, false);
        response = response;
		console.log(event.detail.text);
	}

    //let  result = writable(new Promise(()=>[]));

    
</script>
<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Objetivo de Estudo</h1>
   
    <ObjectiveForm on:message={handleMessage} />

    {#await $response}
       1 <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then result}
        {#each result.data as item}
            <Objective objective={item} index={item.id} on:message={handleMessage} />
            
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

