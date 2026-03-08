<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import TwinklingStars from '$lib/components/TwinklingStars.svelte';

	let { children } = $props();

	let theme = $state<string | undefined>(undefined);
	let scrolled = $state(false);
	let activeSection = $state('');

	onMount(() => {
		theme = mode.current;

		const handleScroll = () => {
			scrolled = window.scrollY > 24;

			const sections = ['about', 'experience', 'projects'];
			for (const id of [...sections].reverse()) {
				const el = document.getElementById(id);
				if (el && window.scrollY >= el.offsetTop - 120) {
					activeSection = id;
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleToggle() {
		toggleMode();
		theme = theme === 'dark' ? 'light' : 'dark';
	}

	function scrollToSection(e: MouseEvent, id: string) {
		e.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div
	class="
		min-h-screen
		bg-linear-to-b
		from-stone-50
		via-stone-50
		to-stone-50
		text-stone-800
		transition-colors
		dark:from-zinc-950
		dark:via-zinc-950
		dark:to-zinc-950
		dark:text-zinc-100
	"
>
	<TwinklingStars
		starImage="./single_star.png"
		numberOfStars={50}
		minSize={10}
		maxSize={30}
		twinkleSpeed={2}
	/>

	<header
		class="
			fixed top-0 right-0 left-0 z-50
			transition-all duration-300
			{scrolled
			? 'border-b border-stone-200 bg-stone-50/80 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80'
			: 'border-b border-transparent bg-transparent'}
		"
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<nav class="flex items-center gap-1">
				{#each [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects']] as [label, id]}
					<a
						href="#{id}"
						onclick={(e) => scrollToSection(e, id)}
						class="
							relative rounded-full px-4 py-1.5 text-sm font-medium tracking-wide
							uppercase transition-colors duration-200
							{activeSection === id
							? 'bg-stone-200/70 text-stone-900 dark:bg-zinc-800/70 dark:text-zinc-100'
							: 'text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'}
						"
					>
						{label}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-4">
				<ul class="flex items-center gap-3" aria-label="Socials">
					<a
						href="/resume/Arham_Riaz_Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="
								relative rounded-full px-4 py-1.5 text-sm font-medium tracking-wide
								uppercase transition-colors duration-200
								
							">Resume</a
					>
					<li>
						<a
							href="https://github.com/ArhamRiaz"
							target="_blank"
							rel="noopener noreferrer"
							class="block opacity-60 transition-opacity hover:opacity-100"
						>
							<img src="./github.png" alt="GitHub" class="h-5 w-5 dark:invert" />
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/arham-asim-riaz/"
							target="_blank"
							rel="noopener noreferrer"
							class="block opacity-60 transition-opacity hover:opacity-100"
						>
							<img src="./linkedin2.png" alt="LinkedIn" class="h-5 w-5 dark:invert" />
						</a>
					</li>
				</ul>

				<div class="h-4 w-px bg-stone-300 dark:bg-zinc-700"></div>

				<button
					onclick={handleToggle}
					class="flex cursor-pointer items-center rounded-full p-1.5 opacity-60 transition-all hover:bg-stone-100 hover:opacity-100 dark:hover:bg-zinc-800"
					aria-pressed={theme === 'dark'}
					aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
					title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if theme === 'dark'}
						<img src="./sun_icon.png" alt="" aria-hidden="true" class="h-5 w-5" />
						<span class="sr-only">Switch to light mode</span>
					{:else}
						<img src="./star_icon.png" alt="" aria-hidden="true" class="h-5 w-5" />
						<span class="sr-only">Switch to dark mode</span>
					{/if}
				</button>
			</div>
		</div>
	</header>

	<div class="relative z-10 mx-auto max-w-6xl px-6 pt-24">
		<main>
			{@render children()}
		</main>
	</div>
</div>
