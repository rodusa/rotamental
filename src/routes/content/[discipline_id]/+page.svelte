<!-- https://strapi.io/blog/how-to-create-a-blog-with-svelte-kit-strapi -->
<!-- https://dev.to/sschuchlenz/how-the-page-load-function-works-in-svelte-sveltekit-328h -->
<!-- <script context="module">
export 	async function loadTopics() {		
		isLoading= false;
        response = getData(hostname, true);
		let result = await $response;
		
			jsonTree = {
				name: 'Root',
				expanded: false,
				children: result.data
				};
				
			return jsonTree;		
		};

export async function load({page}) {
	  const id = page.params.id;
	  const url = `https://api.somedomain.tld/posts/${id}`;
	  const res = await fetch(url);
	  const product = await res.json();
	  return {props: {post}}
	}
</script> -->
<script>	
	import {writable} from 'svelte/store';
	import { onMount} from 'svelte';
	import Tree from '$lib/tree/Tree.svelte';
	import ContentForm from '$lib/content/ContentForm.svelte';
    import {getData as getTopics} from './fetcher.js';
	import { page } from '$app/stores';
	import {Circle2} from 'svelte-loading-spinners';
	import * as utils from '../../../common/utils';
	import { json } from '@sveltejs/kit';

	let url = $page.url;
	let showForm = false;
    let response = writable(new Promise(()=>{}));
	let response_topics = writable(new Promise(()=>{}));
    let hostname = `${utils.getAPIHostname(url)}/api/v1/topics#index`
	let isLoading = true;

	let promise = Promise.resolve({});

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


	// async function loadTopics() {		
	// 	isLoading= false;
    //     response = getData(hostname, true);
	// 	let result = await $response;
		
	// 		jsonTree = {
	// 			name: 'Root',
	// 			expanded: false,
	// 			children: result.data
	// 			};
				
	// 		return jsonTree;		
	// 	};
		
		
		// let x = result;
		// //data = jsonTree;
		// return jsonTree;
		// return getData(hostname, true).subscribe((result) => {
		// 		return result.then((r)=>{
		// 			//data = r;

		// 			jsonTree = {
		// 			name: 'Root',
		// 			expanded: false,
		// 			children: r.data
		// 			};
		// 			return jsonTree;
		// 	});
	//};
	//promise = loadTopics();

	onMount(async () => {	
		// response = getDisciplines(hostname, true);        
        response = getTopics(hostname, true); 
     
        //let result = await $response;		
		
		//let result = await $response;
		//data = await loadTopics();
		//isLoading = false;
		// loadTopics().then((response)=>{ 
		// 	console.log("shit");
		// 	console.log(response);			
		// 	isLoading = false;
		// 	data = response;

		// //return response;							
		// }).catch((error) => {console.log(error.message);});

		console.log('On Mount');
		

		//  loadTopics().then((result)=> {
		// 	data = result;
		 	
		//  });

		console.log("setTimeout() example...");
			

	});

	function showAddBox() {
		// RESET FORM to Blank fieldsd
		showForm = true;
	}
	
	$: (async () => {
		
		//data = data;
		// console.log('data');
		// console.log(data);
		// console.log('jsonTree');

	});
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
		 <Tree data={result.data} />
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
