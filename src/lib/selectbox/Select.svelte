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


<h2>Objetivo</h2>
<div class="p-0 ml-0">
<Select {items} inputStyles="padding-left: 0.5rem; "></Select>
</div>	
<style>
	/* 	CSS variables can be used to control theming.
			https://github.com/rob-balfre/svelte-select/blob/master/docs/theming_variables.md
	*/
	
	.selectContainer {
		border:none;
	}

	.selectContainer input {
		background: orange;
		border: 1px solid rgb(19, 86, 218) !important;
		border-radius: 0.5rem;
	}
</style>
