<script>
	import ExperienceCard from './ExperienceCard.svelte';

	export let experiences;
</script>

<section id="experience" class="mx-auto max-w-4xl px-4">
	<h2 class="mb-8 text-2xl font-bold">Work Experience</h2>

	<div class="">
		<div class="space-y-10">
			{#each experiences as exp}
				<ExperienceCard {...exp} />
			{/each}
		</div>
	</div>
</section>
