<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
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
<!-- style="top: var(--header-height); height: calc(100vh - var(--header-height));" -->
<ModeWatcher />
<div
	class="
		min-h-screen
		bg-linear-to-b
		from-stone-200
		via-stone-100
		to-stone-50
		text-stone-800
		transition-colors

		dark:from-zinc-950
		dark:via-zinc-900
		dark:to-zinc-800
		dark:text-zinc-100
	"
>
	<Header></Header>
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex flex-col lg:flex-row lg:gap-8">
			<aside
				class="w-86 shrink-0 overflow-auto rounded-xl border px-12 py-24 lg:sticky lg:top-32 dark:bg-zinc-900"
				style="top: calc(18vh - var(--header-height)); height: calc(94vh - var(--header-height));"
			>
				<section class="home-section">
					<div class="space-y-0.5">
						<h1 class="text-[40px] font-semibold">Arham Riaz</h1>
						<h4 class=" pb-4 text-[24px]">Software Developer</h4>
					</div>
				</section>
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
				<nav class="flex flex-col gap-6 text-lg">
					<a href="/" class="scroll-smooth opacity-80 hover:opacity-100">About</a>
					<a href="/#experience" class="opacity-80 hover:opacity-100">Experience</a>
					<a href="/#project" class="opacity-80 hover:opacity-100">Projects</a>
				</nav>

				<ul class="mt-8 ml-1 flex items-center" aria-label="Socials">
					<li class="mr-5 shrink-0 text-xs">
						<a href="https://github.com/ArhamRiaz" target="_blank" rel="noopener noreferrer"
							><img src="/github.png" alt="github logo" class="h-8" />
						</a>
					</li>
					<li class="mr-5 shrink-0 text-xs">
						<a
							href="https://www.linkedin.com/in/arham-riaz-3a742222b/"
							target="_blank"
							rel="noopener noreferrer"
							><img src="/linkedin2.png" alt="github logo" class="h-8" />
						</a>
					</li>
				</ul>
			</aside>

			<main class="order-2 flex-1">
				{@render children()}
			</main>
		</div>
	</div>
</div>
