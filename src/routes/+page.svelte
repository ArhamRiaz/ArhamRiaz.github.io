<script>
	import ExperienceTimeline from '$lib/components/experience/ExperienceTimeline.svelte';
	import Header from '$lib/components/Header.svelte';
	import { experiences } from '$lib/components/experience/Experience';
	import { projects } from '$lib/components/projects/Projects';
	import ProjectTimeline from '$lib/components/projects/ProjectTimeline.svelte';
	import HorizontalLineBreak from '$lib/components/HorizontalLineBreak.svelte';
</script>

<svelte:head>
	<title>Arham's Website</title>
	<meta name="description" content="Welcome to my personal website and portfolio!" />
</svelte:head>

<div class="mx-auto pb-12">
	<div class="mx-auto max-w-5xl sm:px-6 lg:px-8">
		<section class="home-section">
			<div class="space-y-0.5">
				<h1 class="text-[48px] font-semibold">Arham Riaz</h1>
				<h4 class=" pb-4 text-[24px]">Software Developer</h4>
			</div>
		</section>

		<section class="home-section space-y-1">
			<h2 class="mb-8 pt-16 text-2xl font-bold">About</h2>
			<div class="text-sm md:text-base">
				<p>
					Hi!! I’m a software developer with an Honours Bachelor of Computer Science Co-op degree
					from Carleton University! I made this website to act as a portfolio for my projects and to
					showcase myself to ___ .
				</p>
				<p>Hobbies: Rock Climbing, Film, NBA, Cricket, Gaming</p>

				<p class="pt-6">Currently playing:</p>
				<img
					src="/hollow-knight-drawing.png"
					alt="hollow knight"
					class="inline-block h-60 w-auto rounded-2xl align-middle"
				/>
			</div>
		</section>
		<div class="pt-12 pb-4">
			<HorizontalLineBreak></HorizontalLineBreak>
		</div>
		<section class="">
			<ExperienceTimeline {experiences} />
		</section>
		<div class="pt-12 pb-4">
			<HorizontalLineBreak></HorizontalLineBreak>
		</div>
		<section class="">
			<ProjectTimeline {projects}></ProjectTimeline>
		</section>
	</div>
</div>
