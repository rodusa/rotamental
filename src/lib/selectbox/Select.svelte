<script>
	import Select from 'svelte-select';
	import Item from './BeerItem.svelte';
	import loadOptions from './fetch.js';
	
	const items = ['Concurso Polícia Federal', 'Entrevista de Emprego', 'ENEM'];
	
	
	const groupBy = (item) => item.group;
	const optionIdentifier = 'id';
  	const getOptionLabel = (option) => option.name;
  	const getSelectionLabel = (option) => option.name;
</script>

<style>
	/* 	CSS variables can be used to control theming.
			https://github.com/rob-balfre/svelte-select/blob/master/docs/theming_variables.md
	*/
	
	.themed {
		border: 3px solid blue;
		border-radius: 30px;
		/* placehoflderColor: blue; */
	}
</style>

<h2>Objetivo</h2>
<Select {items}></Select>