<script>
	import Tree from '$lib/tree/Tree.svelte';
	import ContentForm from '$lib/content/ContentForm.svelte';

	let showForm = false;

	let name = 'world';
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

	function showAddBox() {
		// RESET FORM to Blank fieldsd
		showForm = true;
	}
	
	$: {
		console.log('data');
		console.log(data);
		console.log('jsonTree');
		//console.log(jsonTree);
	}
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
		<Tree {data} />
	</div>
</main>

<style>
	:global(body) {
		margin: 0 0;
	}
</style>
