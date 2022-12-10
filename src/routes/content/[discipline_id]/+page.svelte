<script>
	import {writable} from 'svelte/store';
	import { onMount } from 'svelte';
	import Tree from '$lib/tree/Tree.svelte';
	import ContentForm from '$lib/content/ContentForm.svelte';
    import {getData} from './fetcher.js';
	import { page } from '$app/stores';
	import {Circle2} from 'svelte-loading-spinners';
	import * as utils from '../../../common/utils';

	let url = $page.url;
	let showForm = false;
    let response = writable(new Promise(()=>{}));
    let hostname = `${utils.getAPIHostname(url)}/api/v1/topics#index`

	let name = 'world';
	let jsonTree = {};

	let data = {
		name: 'Root',
		expanded: false,
		children: [
			{
				name: 'Direito Constitucional',
				expanded: false,
				children: [{ name: 'Grand Child 1' }, { name: 'Grand Child 2' }]
			},
			{ name: 'Constituição', expanded: false, children: [{ name: 'Grand Child 2' }] },
			{ name: 'Poder Constituinte' }
		]
	};

	//loadTopics();
	async function loadTopics() {
		console.log(hostname);
        response = getData(hostname, true);
		let result = await $response;
		jsonTree = {
			name: 'Root',
			expanded: false,
			children: result.data
		}
		data = jsonTree;
		return data;
		console.log(jsonTree);

	}
	
	onMount(async () => {
		loadTopics();
		// console.log('On Mount');
		// await loadTopics();
	});

	function showAddBox() {
		// RESET FORM to Blank fieldsd
		showForm = true;
	}
	
	$: {
		// console.log('data');
		// console.log(data);
		// console.log('jsonTree');

	}
</script>

<main class="mt-10 mx-auto max-w-6xl">
	<div class="flex flex-col text-sm mb-2">
		<button
			type="submit"
			class=" w-40 shadow-sm rounded bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 "
			on:click={showAddBox}>Importar Conteúdo</button
		>
	</div>
	{#if showForm}
		<div class="bg-white  shadow-2xl rounded-lg overflow-hidden p-4">			
			 <ContentForm bind:showForm bind:jsonTree={data} />			 			
		</div>
	{/if}

	<div class="mt-10 mx-auto max-w-full">
		{#await $response}
		<Circle2 size="60" color="#FF3E00" unit="px" duration="1s" />    
		 {:then result}
		 <Tree {data} />
	 {:catch}
	 <p>erro aqui</p>
	 {/await}		
		
	</div>
</main>

<style>
	:global(body) {
		margin: 0 0;
	}
</style>
