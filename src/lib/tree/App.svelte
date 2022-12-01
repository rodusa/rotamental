<script>
	import Tree from './Tree.svelte'
	let name = 'world';
	let data = {
		data: 'Root',
		expanded: false,
		children: [
			{data: 'Child 1', expanded: false, children: [{data: 'Grand Child 1'}]},
			{data: 'Child 2', expanded: false, children: [{data: 'Grand Child 2'}]},
			{data: 'Child 3'}
		]
	}
</script>

<Tree {data} />

<style>
	:global(body) {
	margin: 0 0;
	}
</style>