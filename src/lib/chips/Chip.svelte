<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let chip_value = 0;
	const storedValue = writable(chip_value);
	setContext('chip', {storedValue, index: 0});
	
	storedValue.subscribe(v => chip_value = v);
	$: storedValue.set(chip_value);
	
</script>

<div>
	<slot/>
</div>

<style>
    div {
        border: 1px dotted gray;
        padding: 4px;
    }
</style>