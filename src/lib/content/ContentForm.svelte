<script lang="ts">
	import * as utils from '../../common/utils';
	import { slide} from "svelte/transition";
	import { objectives } from '../../stores/objectiveStore';
	import { addDiscipline, disciplineItem } from '../../stores/disciplineStore';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	
	import MyModal from '$lib/modal/modal.svelte';
	// import Chip from '$lib/chips/Chip.svelte';
	// import ChipItem from '$lib/chips/ChipItem.svelte';
	import { createEventDispatcher } from 'svelte';
	import Dp from '$lib/selectbox/Select.svelte';

	export let showForm = true;
	//export let objectives;

	const dispatch = createEventDispatcher();
	//let ar_objectives = [new Promise(()=>[])] ;	
	let ar_objectives = [];	
	let showModal = false;
	let objective_id = null;
	let selectedVal = null
	let discipline = {};
	let todo = '';
	let disabledDp = false;
	let objective_name;
	//let objective_id = "";
	
	// function handleSelect(event) {
   	//  console.log('selected item', event.detail);
    // 	// .. do something here 🙂
  	// }
	//loadObjectives();	
	//loadDisciplines();


    function handleSelect(e) {
		alert(e);
        console.log(e.detail);
    }

	onMount(async () => {	
		// Edit item
	
	
	});
		
	// });	

	//let today = $today_date;
	////const today = new Date().toISOString();

	function openModal() {
		showModal = true;
	}

	let url = $page.url;	

	let name = 'baz';
	let result = null;

	function closeForm() {
		showForm=false;
	}

	const handleSubmit = () => {
		//addObjective(todo);
		todo = '';
		console.log('submitting');
	};

	async function saveRecord() {		
	}

</script>

<form class="my-6" on:submit|preventDefault={handleSubmit} transition:slide>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-" for="todo">Colar</label>

		<textarea
		rows="3"
		placeholder="textarea"
		style="--height: auto"
		class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-blue-500 rounded-lg"
	></textarea>

	</div>


	<!-- <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button> -->
	
	
	
	<div class="flex flex-row justify-between mx-5 my-5">
	<button
		type="submit"
		class="w-28 shadow-sm rounded bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 "
		on:click={closeForm}>Cancelar</button
	>
	<button
		type="submit"
		class="w-28 shadow-sm rounded bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 "
		on:click={saveRecord}>Salvar</button
	>
	</div>

	<!-- <button type="button" on:click={openModal} class="btn">Open Modal</button> -->
</form>
{#if showModal}
	<MyModal
		on:click={() => {
			showModal = false;
		}}
	>
		<p>teste</p>
	</MyModal>
{/if}

<style>
	span {color: red;}
	textarea {
		height: var(--height);
		resize: horizontal;
		padding: 1rem;
		line-height: 1.5;
    overflow: hidden;
	}
</style>