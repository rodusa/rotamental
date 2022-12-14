<script>
    import {writable} from 'svelte/store';
    import { onMount } from 'svelte';
    import { addItems } from '../../../stores/objectiveStore';
    import { disciplineItem } from '../../../stores/disciplineStore';
    import DisciplineForm from "$lib/discipline/DisciplineForm.svelte"; 
    import Discipline from "$lib/discipline/DisciplineItem.svelte"; 
    import {Circle2} from 'svelte-loading-spinners';
    import {getData as getDisciplines} from './fetcher.js';
    import {getData as getObjectives} from '../../objectives/fetcher.js';
    import { page } from '$app/stores';
    import * as utils from '../../../common/utils';
	import { parse } from 'cookie';

    let url = $page.url;
    let objective_id = $page.params.objective_id ? parseInt($page.params.objective_id) : null;
    
    //let queryParams = url.pathname.split("/") 
    // let objective_id = "";
    // if (queryParams.length==3) {
    //     objective_id = queryParams[2];
    // }
    let showForm = false;
    //let result = {};
    let response = writable(new Promise(()=>{}));
    let data = {};
    let response_objectives = writable(new Promise(()=>{}));

    //let hostname = `${utils.getAPIHostname(url)}/api/v1/disciplines/#index`;
    let hostname = `${utils.getAPIHostname(url)}/api/v1/disciplines?objective_id=${objective_id}`;
    //http://127.0.0.1:3000/api/v1/disciplines?objective_id=112
    let objectives_hostname = `${utils.getAPIHostname(url)}/api/v1/objectives/#index`;
    console.log(objectives_hostname);
    let ar_objectives = []; 
    
	//{id: 13, name: 'Dir Const.', created_at: '2022-11-14T18:20:01.049Z', updated_at: '2022-11-14T18:20:01.049Z', objective_id: 112}
	// function setCurrent(obj) {	
	// 	console.log(obj);	
	// 	disciplineItem.set(obj);
	// }

    function showAddBox() {
        let x = $disciplineItem;
        // RESET FORM to Blank fieldsd
        if ($disciplineItem) {
            $disciplineItem.name = '';
            $disciplineItem.objective_id = objective_id;
            $disciplineItem.disabled = true;
        }else{
            // item is null and does not exist 
            let obj = {id: null, name: '', created_at: null, updated_at: null, objective_id: objective_id, disabled: true}
            disciplineItem.set(obj);
        }

		showForm=true;
	}
    
    onMount(async () => {
        response = getDisciplines(hostname, true);
        //$response.then((response) => {
        response_objectives = getObjectives(objectives_hostname, true);        
        let result = await $response_objectives;
        
        addItems(result.data);

        //ar_objectives = await $response_objectives;
        
        //var item = ar_objectives.data.find(item => item.id === 114);
        //console.log(item);
        let x = 5;
        let m = 5;

        //})

        //console.log($response_objectives);
        //let x = await $response;
	});

	function handleMessage(event) {
        response = getDisciplines(hostname, false);
        //let x = await $response;
		console.log(event.detail.text);
	}

    //let  result = writable(new Promise(()=>[]));
 
</script>
<main class="mt-10 mx-auto max-w-4xl">
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Disciplinas</h1>
    <div class="flex flex-col text-sm mb-2">
		<button
		type="submit"
		class=" w-28 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 "
        on:click={showAddBox}
		>Adicionar</button>
	</div>
    {#if showForm}

	<div
    class="bg-white  shadow-2xl rounded-lg overflow-hidden p-4">
        <DisciplineForm on:message={handleMessage} bind:showForm={showForm} />
    </div>
    {/if}
    {#await $response}
       1 <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then result}
        {#each result.data as item}
            <Discipline discipline={item} index={item.id} on:message={handleMessage} bind:showForm={showForm} />
            
        {/each}
    {:catch}
    <p>erro aqui</p>
    {/await}


    {#await $response_objectives}
       ### <Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then data}
    <pre>  {JSON.stringify(data, null, 2)}</pre>
    {:catch}
    <p>erro aqui</p>
    {/await}


</main>
