import { writable } from "svelte/store";

export const disciplines = writable([]);
export const disciplineItem = writable();

export const addDiscipline = (text) => {
    disciplines.update((current) => {
        const newdisciplines = [...current, {text, completed: false, id: Date.now()}];
        return newdisciplines;
    })
}


export const deleteTodo = (id) => {
    disciplines.update(disciplines => disciplines.filter(item => item.id != id));
}