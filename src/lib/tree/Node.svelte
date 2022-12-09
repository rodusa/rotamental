<script>
	import { slide } from 'svelte/transition';
	import ClosedIcon from './ClosedIcon.svelte';
	import OpenedIcon from './OpenedIcon.svelte';
	export let node
	export let level = 0
	
	function toggle() {
		node.expanded = !node.expanded;
	}
</script>

<li on:click={toggle} style="padding-left:{level*1}rem" transition:slide>
	{#if !node.expanded }
		<ClosedIcon/>
	{:else}
		<OpenedIcon/>
	{/if}
	<div class="flex justify-between w-full">
		<div>{node.name}</div>
		<div>
			<button type="submit" class="w-28 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Estudar</button>
		</div>
	</div>

</li>
{#if node.expanded && node.children}
		{#each node.children as child}
			<svelte:self node={child} level={level+1}/>
		{/each}
{/if}

<style>
li {
		border-bottom: solid 1px #eee;
		margin: 0 0;
		padding: 1rem;
		background: #fafafa;
		display: flex;
}
</style>