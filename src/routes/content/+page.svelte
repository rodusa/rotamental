<script>
    import Tree from "$lib/tree/Tree.svelte"; 
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
</script>
<main class="mt-10">
<Tree {data} />
</main>

<style>
	:global(body) {
	margin: 0 0;
	}
</style>