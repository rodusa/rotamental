<script>
	import Node from "./Node.svelte";
	import {onMount} from 'svelte';
	export let data;

//let m = data;
	// onMount(async () => {	
		
	// 	//_data = data;
	// 	//isLoading = false

	// 	// console.log(' Tree data');		
	// 	// console.log(data);	
		
	// 	// (async function() {
  	// 	// 	data = data;
	// 	// 	  console.log(data);	
	// 	// })();	
		
	// 	//_data = data;
	// 	//isLoading = false

	// 	//console.log(data);		

	// });

	//setTimeout(() => {xdata = data}, 1000)
</script>
<!-- <pre>Here:{JSON.stringify(data, null, 2)}</pre> -->

<ul>
	 <Node bind:node={data} />		
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
</style>