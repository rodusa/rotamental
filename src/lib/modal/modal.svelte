<script>
	import { fly, fade } from 'svelte/transition';
	export let isModalOpen;
	export let modalConfig = {};

    let HtmlSlotContent; 
	let modalInset = "200px 0 200px"; // Deafault Value
	let modalWidth = "500px"; // Deafault Value
	
	function closeModal() {
		isModalOpen = false;
	}

	$: {
		if (modalConfig.type == "DELETE") {
			modalInset = "340px 0 340px";
			modalWidth = "300px";
	}

	}
</script>

{#if isModalOpen}	
    <div class="flex flex-col modal-wrapper bg-white  shadow-2xl rounded-box overflow-hidden p-4" transition:fly={{ opacity: 0, y: 100 }} style:inset="{modalInset}" style:width="{modalWidth}">
        <div class="flex-grow w-full" bind:this={HtmlSlotContent}><slot></slot></div>
	</div>
	<div on:click={closeModal} transition:fade class="background_overlay" />
{/if}

<style>
	.modal-wrapper {
		position: fixed;
		/* inset: 200px 0 200px; */
		min-width: 320px;
		max-width: 530px;
		margin: 0 auto;
		/* width: 500px; */
		z-index: 101;
	}

	.background_overlay {
		background: black;
		opacity: 0.3;
		cursor: pointer;
		inset: 0;
		position: fixed;
		z-index: 100;
	}
</style>
