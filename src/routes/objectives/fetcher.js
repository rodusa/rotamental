// By default Writable stores have basically 3 methods: subscribe, update and set
//https://www.youtube.com/watch?v=IUHkSoBxyLM&t=264s&ab_channel=SvelteSociety
import {writable} from 'svelte/store';
const cache = new Map();

export function getData(url) {
    const store = writable(new Promise(() => {}));
    
    if (cache.has(url)) {
        // gets content from cache
        store.set(Promise.resolve(cache.get(url)))
    }

    const load = async() => {
        const response = await fetch(url);
        const data = await response.json();
        
        cache.set(url, data);
        store.set(Promise.resolve(data));
    }
    load();

    return store;
}