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
	let selectedValue = null;
	let chip_value = 0;
	let discipline = {};
	let todo = '';
	let objective_name;
	let objective_id = "";
	
	// function handleSelect(event) {
   	//  console.log('selected item', event.detail);
    // 	// .. do something here 🙂
  	// }
	loadObjectives();	
	loadDisciplines();

	async function loadDisciplines() {
		disciplineItem.subscribe(objval => {
			if (objval && objval.name) {
				discipline = objval;
				todo = discipline ? discipline.name : '';
				chip_value =  discipline ? discipline.area : chip_value;
				selectedValue = JSON.stringify(objval.objective_id);
				let x = selectedValue;						
			}
		})

	}
	async function loadObjectives() {
		objectives.subscribe((data) => {
					ar_objectives  = data.map((item) => ({ value: JSON.stringify(item.id), label: item.name }));
					//return ar_objectives;
					let x = ar_objectives;
					console.log(ar_objectives);					
				});
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
		name = todo;
		let res = null;	
		
		// Edit mode (check if id exists)
		if (discipline.id != undefined) {
			// Edit mode
			res = await fetch(`${utils.getAPIHostname(url)}/api/v1/disciplines/${discipline.id}`, {
			//const res = await fetch(`${utils.getAPIHostname(url)}/api/v1/objectives#create`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: discipline.name, area: chip_value
				})
			});

		}else{
			//New mode
				res = await fetch(`${utils.getAPIHostname(url)}/api/v1/disciplines#create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: discipline.name, area: chip_value
				})
			});
		}

		const json = await res.json();

		if (res.status == 200) {
			dispatch('message', {
				text: 'NEW_RECORD_ADDED!'
			});
		}

		result = JSON.stringify(json);
		showForm = false;
	}
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit} transition:slide>
	<div class="flex flex-col text-sm mb-2">
		<p>{selectedValue} - {objective_name}
			<!-- <Select {items} value="One" /> -->			
		<Dp bind:selectedValue={selectedValue} bind:myitems={ar_objectives}></Dp>
	</div>

	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-2" for="todo">Disciplina</label>
		<input
			type="text"
			bind:value={discipline.name}
			name="todo"
			placeholder="Watch"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-blue-500 rounded-lg"
		/>
	</div>

	<!-- <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button> -->
	<h3>selected value<small>({chip_value})</small></h3>
	
	<!-- <Chip bind:chip_value>
		<div  class="mt-2 mb-2">
		<ChipItem>Concurso Público</ChipItem>
		<ChipItem>Entrevista de Emprego</ChipItem>
		<ChipItem>Exame Escolar, vestibular, etc.</ChipItem>
		<ChipItem>Exame OAB, Medicina, etc.</ChipItem>
		<ChipItem>Bolsa de Estudos</ChipItem>
		<ChipItem>Outros</ChipItem>
	</div>
	</Chip> -->
	
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

	<p>{url.hostname}</p>
	<button type="button" on:click={openModal} class="btn">Open Modal</button>
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