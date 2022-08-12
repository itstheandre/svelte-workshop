<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const cheeseCakeEvent = createEventDispatcher();

	export let text: string = 'Hello';

	function fakeOnClick() {
		cheeseCakeEvent('alfonso');
	}
</script>

{#if text === 'goodbye'}
	<h1>Fuck off</h1>
{:else}
	<button on:click={fakeOnClick}>{text}</button>
{/if}
