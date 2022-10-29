<script lang="ts">
	import * as utils from '../common/utils';
	import { addObjective } from '../stores/objectiveStore';
	import { page } from '$app/stores';
	import MyModal from '$lib/modal/modal.svelte';
	import Chip from '$lib/chips/Chip.svelte';
	import ChipItem from '$lib/chips/ChipItem.svelte';
	import { createEventDispatcher } from 'svelte';
	
    const dispatch = createEventDispatcher(); 


	let isModalOpen = false;

	//let today = $today_date;
	////const today = new Date().toISOString();

	function openModal() {
		isModalOpen = true;
	}

	let url = $page.url;

	let todo = '';

	let value = 1;

	let name = 'baz';
	let result = null;

	const handleSubmit = () => {
		addObjective(todo);
		todo = '';
		console.log('submitting');
	};

	async function createPost() {

		dispatch('message', {
			text: 'NEW_RECORD_ADDED!'
		});

        name = todo;

		const res = await fetch(`${utils.getHostname(url)}/api/v1/objectives#create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name
			})
		});


		const json = await res.json();
		result = JSON.stringify(json);

	}

	let s = utils.getHostname(url);
	console.log(s);
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-2" for="todo">Objetivo de Estudo</label>
		<input
			type="text"
			bind:value={todo}
			name="todo"
			placeholder="Watch"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-red-500 rounded-lg"
		/>
	</div>
	<!-- <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button> -->
	<h3>selected value<small>({value})</small></h3>
	<Chip bind:value>
		<ChipItem>Concurso Público</ChipItem>
		<ChipItem>Entrevista de Emprego</ChipItem>

		<ChipItem>Exame Escolar, vestibular, etc.</ChipItem>
		<ChipItem>Exame OAB, Medicina, etc.</ChipItem>
		<ChipItem>Bolsa de Estudos</ChipItem>
		<ChipItem>Outros</ChipItem>
	</Chip>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 "
		on:click={createPost}>Adicionar</button>

	<p>{url.hostname}</p>
    <button type="button" on:click={openModal} class="btn">Open Modal</button>    
</form>

<MyModal bind:isModalOpen >
<p> teste</p>

</MyModal>
<style>
	/* input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	} */
</style>
