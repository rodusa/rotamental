<script>
    let count = 1;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }


</script>

<main class="mt-10 mx-auto max-w-4xl">
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Test</h1>
    <button on:click={decrement} class="w-20 h-20 bg-cyan-100">-</button>
    {count} * 2 = {count*2}
    <button on:click={increment} class="w-20 h-20  bg-cyan-100">+</button>
</main>

