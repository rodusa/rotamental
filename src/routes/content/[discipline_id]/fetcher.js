// By default Writable stores have basically 3 methods: subscribe, update and set
//https://www.youtube.com/watch?v=IUHkSoBxyLM&t=264s&ab_channel=SvelteSociety
//https://www.youtube.com/watch?v=Yetk_OWplrE
import {writable} from 'svelte/store';

const cache = new Map();
//export const timeout = writable(false);
let store = writable(new Promise(() => {}));

export function getData(url, enable_cache) {
    let m = url;
    if (enable_cache && cache.has(url)) {
        // gets content from cache
        store.set(Promise.resolve(cache.get(url)))        
    }

    const load = async() => {
        const response = await fetch(url);
        const data = await response.json();
        
        if (enable_cache && cache.has(url)) {
            cache.set(url, data);            
        
        }
        let x = 5;
        store.set(Promise.resolve(data));
    }
    load();

    return store;
}
