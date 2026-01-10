<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import Header from '$lib/components/Header.svelte';
	import { experiences } from '$lib/components/experience/Experience';
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<!-- <Header /> -->

<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
	<section class="home-section">
		<div class="space-y-0.5">
			<h1 class="text-[48px] font-semibold">Arham Riaz</h1>
			<h4 class=" text-[24px]">Software Developer</h4>
		</div>
	</section>

	<section class="home-section space-y-1">
		<h3 class="section-label pt-15 pb-2 text-[18px]">About</h3>
		<div class="text-sm md:text-base">
			<p>
				Hi!! I’m a software developer with an Honours Bachelor of Computer Science Co-op degree from
				Carleton University! I made this website to act as a portfolio for my projects and to
				showcase myself to ___ .
			</p>
			<p>Hobbies: Rock Climbing, Film, NBA, Cricket, Gaming</p>

			<p class="pt-6">Currently playing:</p>
			<img
				src="/hollow knight.png"
				alt="hollow knight"
				class="inline-block h-60 w-auto rounded-2xl align-middle"
			/>
		</div>
		<ExperienceTimeline {experiences} />
	</section>
</div>
