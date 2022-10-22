<script>
    import { text } from "svelte/internal";
import {deleteTodo} from "../stores/objectiveStore"
    export let objective;

</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
    <input
    name="completed"
    type="checkbox"
    checked={objective.completed}>
    <span class={`ml-2 flex-1 text-gray-800 ${objective.completed ? 'line-through' : ''}`}>{objective.text}</span>
    
    <button 
    type="button" 
    class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
    on:click={() => deleteTodo(objective.id)}>Delete</button>
    
</li>

