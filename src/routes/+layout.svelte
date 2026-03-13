<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/logo.png';
	import { ModeWatcher, toggleMode, mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import TwinklingStars from '$lib/components/TwinklingStars.svelte';

	let { children } = $props();

	let theme = $state<string | undefined>(undefined);
	let scrolled = $state(false);
	let activeSection = $state('about');

	onMount(() => {
		theme = mode.current;

		const handleScroll = () => {
			scrolled = window.scrollY > 24;

			const sections = ['about', 'experience', 'projects', 'currently'];
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
	<!-- Instrument Serif for display headings + DM Sans for body -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<ModeWatcher />

<div
	class="
		min-h-screen
		bg-stone-50 text-stone-800
		transition-colors duration-300
		dark:bg-zinc-950 dark:text-zinc-100
	"
>
	<TwinklingStars
		starImage="./single_star.png"
		numberOfStars={30}
		minSize={10}
		maxSize={30}
		twinkleSpeed={2}
	/>

	<!-- ── Nav ── -->
	<header
		class="
			fixed top-0 right-0 left-0 z-50
			transition-all duration-300
			{scrolled
			? 'border-b border-stone-200/80 bg-stone-50/75 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/75'
			: 'border-b border-transparent bg-transparent'}
		"
	>
		<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
			<!-- Left: name as anchor -->
			<a
				href="#about"
				onclick={(e) => scrollToSection(e, 'about')}
				class="font-display text-base font-semibold text-stone-900 opacity-80 transition-opacity hover:opacity-100 dark:text-zinc-100"
			>
			</a>

			<!-- Right: nav links + icons -->
			<div class="flex items-center gap-5">
				<nav class="flex items-center gap-1">
					{#each [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects']] as [label, id]}
						<a
							href="#{id}"
							onclick={(e) => scrollToSection(e, id)}
							class="
								relative px-3 py-1.5 text-sm transition-colors duration-200
								{activeSection === id
								? 'text-stone-900 dark:text-zinc-100'
								: 'text-stone-400 hover:text-stone-700 dark:text-zinc-500 dark:hover:text-zinc-300'}
							"
						>
							{label}
							{#if activeSection === id}
								<span class="absolute right-3 bottom-0 left-3 h-px bg-stone-900 dark:bg-zinc-100"
								></span>
							{/if}
						</a>
					{/each}
				</nav>

				<div class="h-4 w-px bg-stone-200 dark:bg-zinc-800"></div>

				<!-- Resume -->
				<a
					href="/resume/Arham_Riaz_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-stone-400 transition-colors hover:text-stone-700 dark:text-zinc-500 dark:hover:text-zinc-300"
				>
					Resume ↗
				</a>

				<!-- GitHub -->
				<a
					href="https://github.com/ArhamRiaz"
					target="_blank"
					rel="noopener noreferrer"
					class="block opacity-50 transition-opacity hover:opacity-100"
					aria-label="GitHub"
				>
					<img src="./github.png" alt="" class="h-4 w-4 dark:invert" />
				</a>

				<!-- LinkedIn -->
				<a
					href="https://www.linkedin.com/in/arham-asim-riaz/"
					target="_blank"
					rel="noopener noreferrer"
					class="block opacity-50 transition-opacity hover:opacity-100"
					aria-label="LinkedIn"
				>
					<img src="./linkedin2.png" alt="" class="h-4 w-4 dark:invert" />
				</a>

				<div class="h-4 w-px bg-stone-200 dark:bg-zinc-800"></div>

				<!-- Dark mode toggle -->
				<button
					onclick={handleToggle}
					class="flex cursor-pointer items-center rounded-full p-1.5 opacity-50 transition-all hover:opacity-100"
					aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if theme === 'dark'}
						<img src="./sun_icon.png" alt="" class="h-4 w-4" />
					{:else}
						<img src="./star_icon.png" alt="" class="h-4 w-4" />
					{/if}
				</button>
			</div>
		</div>
	</header>

	<!-- ── Page content ── -->
	<div class="relative z-10 mx-auto max-w-3xl px-6 pt-24">
		<main>
			{@render children()}
		</main>
	</div>
</div>
