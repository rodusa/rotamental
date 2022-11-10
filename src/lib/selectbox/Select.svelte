<script>
	window.process = {env: {}} // REPL issue, ignore

	//import Select from 'svelte-select@beta';
	import Select from 'svelte-select';
	export let selectedValue;
	//let value = selectedValue;
	//const items = ['One', 'Two', 'Three'];
//	export let items; 
	
	const items = [
	    {value: '114', label: 'Concurso Polícia Federal2'},
		{value: '115', label: 'Entrevista de Emprego2'},
		{value: '116', label: 'ENEM2'}	
		];	
</script>

<h2>Default</h2>
<Select {items} value="{selectedValue}" ></Select>

<style>	
	/* 	
			CSS variables can be used to control theming.
			https://github.com/rob-balfre/svelte-select/blob/master/docs/theming_variables.md
	*/
	
	.themed {
		--border: 3px solid blue;
		--border-radius: 10px;
		--placeholder-color: blue;
	}
	
	.icon {
		--selected-item-padding: 0 10px 0 8px;
		--input-padding: 0 10px 0 10px;
	}
</style>