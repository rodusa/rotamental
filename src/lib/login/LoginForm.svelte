<script lang="ts">
	// import * as cookie from "cookie";
	//import { Cookies  as cookie} from '@sveltejs/kit';
	// //import { setCookie } from 'svelte-cookie';
	//import { Cookies } from '@sveltejs/kit-cookies';
	// fixed add slider param to route
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
	//const cookies = new Cookies();

	let showModal = false;
	let chip_value = 0;
	//let user = {};
	let todo = '';
	let errorMsg = '';

	const user = new UserModel("xixi@gmail.com", "123456");
	//debugger;
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

	async function apiLogin () {
		let _url = `${utils.getAPIHostname(url)}/login`;
		const res = await fetch("api/login", {
			method: 'POST',
			body: JSON.stringify({
					username: user.email, password: user.password, url: _url
				}),
            headers: { 'Content-Type': 'application/json' }
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}


	async function Login() {
		await apiLogin();
		return;	
		
		let x = 5;
		console.log('login here: ' + x);	
		// name = todo;
		let res = null;	
		
			//New mode
				res = await fetch(`${utils.getAPIHostname(url)}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'					
				},
				body: JSON.stringify({
					username: user.email, password: user.password
				})
			});
		
		const json = await res.json();		

		if (res.status == 200) {
			// let m = res;
			// res.headers.set('Set-Cookie','test');
			//res.headers.coset ('x-custom-header', 'potato');
			//res.cookie('Set-Cookie': 'jwt=OUR_TOKEN_CONTENT; secure; httpOnly; sameSite=Lax');
			dispatch('message', {
				text: 'LOGIN SUCCEED!'
			});
			
			document.cookie = `token=${json.token}; httpOnly=true; secure=true; sameSite=lax; expires=${new Date(Date.now() + 7 * 60 * 1000).toUTCString()}`;
			
			//res.headers = 	headers

			//showForm = false;
		}

		if (res.status == 422 && json.error == "Duplicate User" ) {
			errorMsg = "Email j?? cadastrado!!!";
			//alert(res.error);
		}

		result = json;
		
	}

</script>

<form class="my-6" on:submit|preventDefault={handleSubmit} transition:slide>
	<div class="flex flex-col text-sm mb-2">
	<h1 class="text-2xl font-bold text-center text-orange-500 md:text-3xl">Login</h1>
	</div>
	<div class="flex flex-col text-sm mb-2">
		<label class="font-bold text-sm mb-2 text-red-500 m-auto" for="todo">{errorMsg}</label>
	</div>

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

	<div class="flex flex-row justify-between mx-5 my-5 ">
	<button
		type="button"
		class="w-28 shadow-sm rounded bg-orange-400 hover:bg-orange-700 text-white py-2 px-4 "
		on:click={closeForm}>Cancelar</button
	>
	<button
		type="button"
		class="w-28 shadow-sm rounded bg-orange-400 hover:bg-orange-700 text-white py-2 px-4 "
		on:click={Login}>Login</button
	>
	</div>
		<pre>  {JSON.stringify(result, null, 2)}</pre>
	<!-- <p>{url.hostname}</p> -->
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
	/* input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	} */
</style>
