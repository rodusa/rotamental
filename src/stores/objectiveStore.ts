import { writable } from "svelte/store";

export const objectives = writable([]);

export const addObjective = (text) => {
    objectives.update((current) => {
        const newObjectives = [...current, {text, completed: false, id: Date.now()}];
        return newObjectives;
    })
}

export const deleteTodo = (id) => {
    objectives.update(objectives => objectives.filter(item => item.id != id));
}