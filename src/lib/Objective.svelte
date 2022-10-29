<script lang="ts">
	import * as utils from '../common/utils';
    import { deleteTodo } from '../stores/objectiveStore';
	import { page } from '$app/stores';
	export let objective;
	let name = 'baz';
	let url = $page.url;
    
    //console.log(utils.getHostname(url));

	async function deleteObjective(id) {
		//name = todo;

		const res = await fetch(`${utils.getHostname(url)}/api/v1/objectives/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name
			})
		});
	}
</script>

<li
	class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 
            py-2 px-4"
>
	<input name="completed" type="checkbox" checked={objective.completed} />
	<span class={`ml-2 flex-1 text-gray-800 ${objective.completed ? 'line-through' : ''}`}
		>{objective.id} - {objective.name}</span
	>

	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => deleteObjective(objective.id)}>Delete</button
	>
</li>
