<script>
	window.process = {env: {}} // REPL issue, ignore

	//import Select from 'svelte-select@beta';
	import Select from 'svelte-select';
	export let editValue;
	export let myitems;
	export let selectedValue = null;
	//let value = selectedValue;
	//const items = ['One', 'Two', 'Three'];
//	export let items; 
	export let items = myitems;
	export let disabled = false;
	// let x = items;
	// export let items = [
	//     {value: '114', label: 'Concurso Polícia Federal2'},
	// 	{value: '115', label: 'Entrevista de Emprego2'},
	// 	{value: '116', label: 'ENEM2'}	
	// 	];	

    function handleSelect(e) {
		selectedValue = e.detail;
        //console.log(e.detail);
    }
</script>

<h2>Objetivo</h2>
<Select {items} value="{editValue}" on:change={handleSelect} {disabled}></Select>

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