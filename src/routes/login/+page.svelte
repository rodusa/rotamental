<script>
    import {writable} from 'svelte/store';
    import { onMount } from 'svelte';
    import { objectiveItem } from '../../stores/objectiveStore';
    import LoginForm from "$lib/login/LoginForm.svelte"; 
    
    //import {getData} from './fetcher.js';
    import { page } from '$app/stores';
    import * as utils from '../../common/utils';

    let url = $page.url;
    //import { page } from '$app/stores'

    let slide = $page.url.searchParams.get('slide');
    let showForm = slide ? slide : false;
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
        //response = getData(hostname, true);
        //let x = await $response;
	});

	function handleMessage(event) {
        //response = getData(hostname, false);
        //let x = await $response;
		// console.log(event.detail.text);
	}

    //let  result = writable(new Promise(()=>[]));
 
</script>
<main class="mt-10 mx-auto max-w-xl">
    <!-- <h1 class="text-2xl font-bold text-center text-orange-500 md:text-3xl">Login</h1> -->
    <!-- <div class="flex flex-col text-sm mb-2">
		<button
		type="submit"
		class=" w-28 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 "
        on:click={showAddBox}
		>Sign Up</button>
	</div> -->
    {#if showForm}

	<div
    class="bg-white  shadow-2xl rounded-lg overflow-hidden p-4">
        <LoginForm on:message={handleMessage} bind:showForm={showForm} />
    </div>
    {/if}



    <!-- {#await $response}
        2<Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
    {:then data}
    <pre>  {JSON.stringify(data, null, 2)}</pre>
    {:catch}
    <p>erro aqui</p>
    {/await}
 -->

</main>

