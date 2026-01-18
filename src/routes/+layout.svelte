<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';

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
	<Header></Header>
	<div class="flex">
		<aside class="sticky top-0 h-screen w-56 shrink-0 px-12 py-24">
			<button
				onclick={handleToggle}
				class="flex cursor-pointer items-center rounded-lg pb-6 text-sm opacity-80 hover:opacity-100"
				aria-pressed={theme === 'dark'}
				aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if theme === 'dark'}
					<img src="/sun_icon.png" alt="" aria-hidden="true" class="h-6 w-6" />
					<span class="sr-only">Switch to light mode</span>
				{:else}
					<img src="/star_icon.png" alt="" aria-hidden="true" class="h-6 w-6" />
					<span class="sr-only">Switch to dark mode</span>
				{/if}
			</button>
			<nav class="flex flex-col gap-6 text-sm">
				<a href="/" class="opacity-80 hover:opacity-100">About</a>
				<a href="/#experience" class="opacity-80 hover:opacity-100">Experience</a>
				<a href="/#project" class="opacity-80 hover:opacity-100">Projects</a>
			</nav>
		</aside>

		{@render children()}
	</div>
</div>
