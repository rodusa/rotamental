<script lang="ts">
	import * as utils from '../../common/utils';
	import { slide} from "svelte/transition";
	import { objectiveItem } from '../../stores/objectiveStore';
	import { onMount} from 'svelte';
	import { page } from '$app/stores';
	import MyModal from '$lib/modal/modal.svelte';
	import Chip from '$lib/chips/Chip.svelte';
	import ChipItem from '$lib/chips/ChipItem.svelte';
	import {UserModel} from "../../models/User"; 
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	export let showForm = true;
	const dispatch = createEventDispatcher();	
	
	let showModal = false;
	let chip_value = 0;
	//let user = {};
	let todo = '';

	const user = new UserModel("xixi@gmail.com", "123456");
	
	// beforeUpdate(() => {
    // 	alert('beforeUpdate');
	// })

	// afterUpdate(() => {
    // 	//alert('afterUpdate');
	// })


	onMount(async () => {
		//alert('on mount');
		// Edit item
		// objectiveItem.subscribe(objval => {
		// 	if (objval && objval.name) {
		// 		objective = objval;
		// 		todo = objective ? objective.name : '';
		// 		chip_value =  objective ? objective.area : chip_value;
		// 	}
		// })
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
		goto(`/signup`)  
	}

	const handleSubmit = () => {
		//addObjective(todo);
		todo = '';
		console.log('submitting');
	};

	async function saveRecord() {		
		// name = todo;
		let res = null;	
		
		// // Edit mode (check if id exists)
		// if (user.id != undefined) {
		// 	// Edit mode
		// 	res = await fetch(`${utils.getAPIHostname(url)}/api/v1/signup/${signup.id}`, {
		// 	//const res = await fetch(`${utils.getAPIHostname(url)}/api/v1/objectives#create`, {
		// 		method: 'PUT',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			name: objective.name, area: chip_value
		// 		})
		// 	});

			//New mode
				res = await fetch(`${utils.getAPIHostname(url)}/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: user.email, password: user.password
				})
			});
		

		const json = await res.json();
			let x = 5;
		if (res.status == 200) {
			dispatch('message', {
				text: 'NEW_RECORD_ADDED!'
			});
			showForm = false;
		}
		if (res.status == 422) {
			let x = 5;
			console.log(json.error);
			//alert(res.error);
		}


		result = JSON.stringify(json);
		
	}

</script>

<form class="my-6" on:submit|preventDefault={handleSubmit} transition:slide>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-2" for="todo">Email</label>
		<input
			type="text"
			bind:value={user.email}
			name="todo"
			placeholder="Watch"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-red-500 rounded-lg"
		/>
	</div>
	<!-- <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button> -->
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-2" for="todo">Password</label>
		<input
			type="text"
			bind:value={user.password}
			name="todo"
			placeholder="Watch"
			class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-red-500 rounded-lg"
		/>
	</div>

	
	
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
