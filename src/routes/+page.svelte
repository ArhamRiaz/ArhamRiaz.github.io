<script lang="ts">
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import { experiences } from '$lib/components/experience/Experience';
	import { projects } from '$lib/components/projects/Projects';
	import ProjectTimeline from '$lib/components/projects/ProjectTimeline.svelte';
	import FadeUp from '$lib/components/FadeUp.svelte';
	import { onMount } from 'svelte';

	// Hero word-by-word animation
	const heroWords = ['Arham', 'Riaz'];
	let visibleWords = $state<boolean[]>(heroWords.map(() => false));
	let subtitleVisible = $state(false);
	let bioVisible = $state(false);

	onMount(() => {
		heroWords.forEach((_, i) => {
			setTimeout(
				() => {
					visibleWords[i] = true;
				},
				200 + i * 160
			);
		});
		setTimeout(
			() => {
				subtitleVisible = true;
			},
			200 + heroWords.length * 160 + 50
		);
		setTimeout(
			() => {
				bioVisible = true;
			},
			200 + heroWords.length * 160 + 150
		);
	});
</script>

<svelte:head>
	<title>Arham Riaz</title>
	<meta name="description" content="Software developer. Rock climber. NBA fan." />
</svelte:head>

<!-- ── Hero ── -->
<section id="about" class="pt-16 pb-32">
	<div class="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-0">
		{#each heroWords as word, i}
			<span
				class="hero-word font-display text-6xl font-semibold tracking-tight text-stone-900 md:text-6xl dark:text-zinc-50"
				class:visible={visibleWords[i]}
			>
				{word}
			</span>
		{/each}
	</div>

	<p
		class="subtitle mb-8 text-base font-medium tracking-widest text-stone-400 uppercase dark:text-zinc-500"
		class:visible={subtitleVisible}
	>
		Software Developer
	</p>

	<div class="bio max-w-xl space-y-4" class:visible={bioVisible}>
		<p class="text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
			I'm a software developer just starting out my career, eager to explore more of the tech world
			and excited to expand my skills - especially when it comes to full stack development.
		</p>
		<p class="text-lg leading-relaxed text-stone-600 dark:text-zinc-400">
			My hobbies include: rock climbing, film, the NBA, reading manga and playing video games. Feel
			free to get in contact with me, whether to talk programming, tech or anything else!!
		</p>
	</div>
</section>

<!-- ── Experience ── -->
<FadeUp delay={200 + heroWords.length * 160 + 50}>
	<section id="experience" class="pb-32">
		<p
			class="mb-8 text-xl font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
		>
			Experience
		</p>
		<ExperienceTimeline {experiences} />
	</section>
</FadeUp>

<!-- ── Projects ── -->
<FadeUp delay={100}>
	<section id="projects" class="pb-32">
		<p
			class="mb-8 text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
		>
			Projects
		</p>
		<ProjectTimeline {projects} />
	</section>
</FadeUp>

<!-- ── Currently ── -->
<FadeUp delay={150}>
	<section id="currently" class="pb-32">
		<p
			class="mb-8 text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
		>
			Currently
		</p>
		<div class="flex flex-wrap gap-6">
			<div class="group w-40">
				<p class="mb-3 text-xs text-stone-400 dark:text-zinc-500">Playing</p>
				<div
					class="overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
				>
					<img src="./ds3.jpg" alt="Dark Souls III" class="w-full object-cover" />
				</div>
			</div>
			<div class="group w-40">
				<p class="mb-3 text-xs text-stone-400 dark:text-zinc-500">Reading</p>
				<div
					class="overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
				>
					<img
						src="./malcolm-x-bio.jpg"
						alt="The Autobiography of Malcolm X"
						class="w-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>
</FadeUp>

<!-- ── Footer ── -->
<footer class="border-t border-stone-200 py-12 dark:border-zinc-800">
	<p class="text-xs text-stone-400 dark:text-zinc-600">
		Built with SvelteKit & TailwindCSS · <span class="tabular-nums">{new Date().getFullYear()}</span
		>
	</p>
</footer>

<style>
	.hero-word {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.hero-word.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.subtitle {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.5s ease 0s,
			transform 0.5s ease 0s;
	}
	.subtitle.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.bio {
		opacity: 0;
		transform: translateY(12px);
		transition:
			opacity 0.5s ease 0s,
			transform 0.5s ease 0s;
	}
	.bio.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
