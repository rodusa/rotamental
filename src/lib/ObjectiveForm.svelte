<script>
    import {addObjective} from "../stores/objectiveStore"
    let todo = '';
    const handleSubmit= () => {
        addObjective(todo);
        todo = '';
        console.log('submitting');
    }
</script>
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold text-sm mb-2" for="todo">Objetivo de Estudo</label>
        <input type="text" bind:value={todo} name="todo" placeholder="Watch" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-red-500 rounded-lg"/>
    </div>
    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 ">Submit</button>
</form>
<style>
    
    /* input {
		border: 1px solid transparent;
	}

	input:focus-visible {
		box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid #ff3e00 !important;
		outline: none;
	} */

</style>