<script lang="ts">
	//import * as utils from '../../common/utils';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import { objectiveItem } from '../../stores/objectiveStore';
	import { DEFAULT_CONFIG } from '../../stores/globalStore';

	import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';    
	export let objective;
	export let showForm = false;

    const dispatch = createEventDispatcher(); 
	
	let result = null;
    let name = 'baz';
	let url = $page.url;

	// function routeToPage(route: string, replaceState: boolean) {
	//    goto(`/${route}`, { replaceState }) 
	// }



	function setCurrent(obj) {	
		DEFAULT_CONFIG.set({name: obj.name});	
		objectiveItem.set(obj);
		goto(`/disciplines/${obj.id}`); 
		//showForm=true; 
	}
	
</script>

<li
	class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 
            py-2 px-4"
>
	<!-- <input name="completed" type="checkbox" checked={objective.completed} /> -->
	<span class={`ml-2 flex-1 text-gray-800 ${objective.completed ? 'line-through' : ''}`}
	on:click={() => {showForm=true}}>{objective.name}</span
	>

	<button
		type="button"
		class="mr-3 text-sm bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
		on:click={() => {setCurrent(objective);}}>Estudar</button
	>

</li>
