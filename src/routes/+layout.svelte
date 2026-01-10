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
	<div class="flex">
		<aside
			class="sticky top-0 h-screen w-56 shrink-0 border-r border-stone-200 px-6 py-8
			       dark:border-zinc-800"
		>
			<button
				onclick={handleToggle}
				class="rounded-lg pb-6 text-sm hover:bg-stone-200 dark:border-zinc-700"
			>
				{theme === 'dark' ? 'Dark 🌙' : 'Light ☀️'}
			</button>
			<nav class="flex flex-col gap-6 text-sm">
				<a href="/" class="opacity-80 hover:opacity-100">About</a>
				<a href="/#experience" class="opacity-80 hover:opacity-100">Experience</a>
				<a href="/about" class="opacity-80 hover:opacity-100">Projects</a>
			</nav>
		</aside>

		{@render children()}
	</div>
</div>
