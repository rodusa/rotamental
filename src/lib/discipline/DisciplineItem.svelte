<script lang="ts">
	import * as utils from '../../common/utils';
	import { onMount } from 'svelte';
    import { disciplineItem } from '../../stores/disciplineStore';
	import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';    
	export let discipline;
	
	export let showForm = false;


    const dispatch = createEventDispatcher(); 
	
	let result = null;
    let name = 'baz';
	let url = $page.url;
	//{id: 13, name: 'Dir Const.', created_at: '2022-11-14T18:20:01.049Z', updated_at: '2022-11-14T18:20:01.049Z', objective_id: 112}
	function setCurrent(obj) {	
		console.log(obj);	
		obj.disabled=false;
		disciplineItem.set(obj);
	}
	

	async function deleteDiscipline(id) {
		//name = todo;

		const res = await fetch(`${utils.getAPIHostname(url)}/api/v1/disciplines/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		//const json = await res.json();

		if (res.status==204) {
			dispatch('message', {
				text: 'NEW_RECORD_ADDED!'
			});
		}

		//result = JSON.stringify(json);		
	}
</script>

<li
	class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 
            py-2 px-4"
>
	<!-- <input name="completed" type="checkbox" checked={objective.completed} /> -->
	<span class={`ml-2 flex-1 text-gray-800 ${discipline.completed ? 'line-through' : ''}`}
	on:click={() => {showForm=true}}>{discipline.name}</span
	>
	<!-- <span class={`ml-2 flex-1 text-gray-800 ${discipline.completed ? 'line-through' : ''}`}
	on:click={() => {showForm=true}}>{discipline.id} - objective_id: {discipline.objective_id} - {discipline.name}</span
	> -->


	<button
		type="button"
		class="mr-3 text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => {showForm=true; setCurrent(discipline);}}>edit</button
	>

	<button
	type="button"
	class="mr-3 text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
	on:click={() => {showForm=true; setCurrent(discipline);}}>Conteúdo</button
>


	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => deleteDiscipline(discipline.id)}>Delete</button
	>
</li>