<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { counterStore, objectStore } from '../lib/counter.store';

	import Button from '../lib/Button.svelte';
	let count = 0;
	let text = 'Mustafa';

	let todo = '';

	let todos: string[] = ['test'];

	function increment(by: number) {
		count++;
		text = 'Alex';
		counterStore.set(count);
	}

	function submit() {
		todos = [...todos, todo];
		// todoOs.push(todo);
		todo = '';
	}

	$: {
		console.log(todos);
	}

	$: todoCapital = todo.toUpperCase();
</script>

<h4>{todoCapital}</h4>

<div>
	todos
	<ul>
		{#each todos as item}
			<li>{item}</li>
		{/each}
	</ul>
</div>

{todo}
<form on:submit|preventDefault={submit}>
	<input type="text" bind:value={todo} />
	<button type="submit">Submit Todo</button>
</form>

<h2>{$counterStore}</h2>
<p>{$objectStore.name}</p>

<a href="/about">About</a>

<Button
	{text}
	on:alfonso={() => {
		$counterStore++;
		$objectStore.name = 'Piotr';
	}}
/>

<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => increment(2)}>Increment</button>

<div>
	<div class="hello">Hello there</div>
</div> -->
<style>
	button {
		background-color: red;
	}
</style>
