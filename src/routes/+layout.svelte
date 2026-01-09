<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { onMount } from 'svelte';

	let { children } = $props();

	let theme = $state('light');

	function handleToggle() {
		toggleMode();
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />
<div
	class="min-h-screen bg-stone-100 text-stone-800 transition-colors dark:bg-zinc-950 dark:text-zinc-100"
>
	<nav class="flex items-center justify-between px-6 py-4">
		<button
			onclick={handleToggle}
			class="rounded-lg border border-stone-300 px-3 py-1 text-sm dark:border-zinc-700"
		>
			{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
		</button>
	</nav>
	{@render children()}
</div>
