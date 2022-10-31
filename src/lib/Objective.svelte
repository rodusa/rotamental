<script lang="ts">
	import * as utils from '../common/utils';
    // import { deleteTodo } from '../stores/objectiveStore';
	import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';    
	export let objective;
	export let showForm = false;

    const dispatch = createEventDispatcher(); 
	
	let result = null;
    let name = 'baz';
	let url = $page.url;
    
    //console.log(utils.getAPIHostname(url));

	async function deleteObjective(id) {
		//name = todo;

		const res = await fetch(`${utils.getAPIHostname(url)}/api/v1/objectives/${id}`, {
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
	<input name="completed" type="checkbox" checked={objective.completed} />
	<span class={`ml-2 flex-1 text-gray-800 ${objective.completed ? 'line-through' : ''}`}
	on:click={() => {showForm=true;}}>{objective.id} - area: {objective.area} - {objective.name}</span
	>

	<button
		type="button"
		class="mr-3 text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => showForm=true}>edit</button
	>

	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => deleteObjective(objective.id)}>Delete</button
	>
</li>
