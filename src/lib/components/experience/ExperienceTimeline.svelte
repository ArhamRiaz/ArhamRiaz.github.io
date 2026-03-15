<script lang="ts">
	import ExperiencePreview from './ExperiencePreview.svelte';
	import ExperienceCard from './ExperienceCard.svelte';

	export let experiences: any[];

	let activeIds: Set<string> = new Set();

	function toggle(id: string) {
		const copy = new Set(activeIds);
		if (copy.has(id)) {
			copy.delete(id);
		} else {
			copy.add(id);
		}
		activeIds = copy;
	}
</script>

<section id="experience">
	<div>
		{#each experiences as exp (exp.id)}
			<div
				class="border-b border-(--color-border) last:border-0 dark:border-(--color-border-dark)"
				role="button"
				tabindex="0"
				on:click={() => toggle(exp.id)}
				on:keydown={(e) => e.key === 'Enter' && toggle(exp.id)}
			>
				{#if activeIds.has(exp.id)}
					<ExperienceCard
						company={exp.company}
						role={exp.role}
						period={exp.dates}
						location={exp.location}
						bullets={exp.bullets}
						tags={exp.tech}
						link={exp.link}
					/>
				{:else}
					<ExperiencePreview
						company={exp.company}
						role={exp.role}
						period={exp.dates}
						location={exp.location}
						tech={exp.tech}
						link={exp.link}
					/>
				{/if}
			</div>
		{/each}
	</div>
</section>
