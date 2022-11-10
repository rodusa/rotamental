import { writable } from "svelte/store";

export const objectives = writable([]);
export const objectiveItem = writable();


export const addItems = (items) => {
    objectives.set(items);    
}

export const deleteTodo = (id) => {
    objectives.update(objectives => objectives.filter(item => item.id != id));
}