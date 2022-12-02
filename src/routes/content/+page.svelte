<script>
    import Tree from "$lib/tree/Tree.svelte"; 
	import ContentForm from "$lib/content/ContentForm.svelte";

	let showForm = false;

	let name = 'world';
	
	let data = {
		data: 'Direito Constitucional',
		expanded: false,
		children: [
			{data: 'Direito Constitucional', expanded: false, children: [{data: 'Grand Child 1'}]},
			{data: 'Constituição', expanded: false, children: [{data: 'Grand Child 2'}]},
			{data: 'Poder Constituinte'}
		]
	}

    function showAddBox() {
        // RESET FORM to Blank fieldsd
		showForm=true;
	}	
</script>
<main class="mt-10">
    <div class="flex flex-col text-sm mb-2">
		<button
		type="submit"
		class=" w-28 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 "
        on:click={showAddBox}
		>Editar</button>
	</div>
    {#if showForm}

	<div
    class="bg-white  shadow-2xl rounded-lg overflow-hidden p-4">
        <ContentForm bind:showForm={showForm} />
    </div>
    {/if}







<Tree {data} />
</main>

<style>
	:global(body) {
	margin: 0 0;
	}
</style>