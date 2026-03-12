<script lang="ts">
	import ExperiencePreview from './ExperiencePreview.svelte';
	import ExperienceModal from './ExperienceModal.svelte';
	import ExperienceCard from './ExperienceCard.svelte';
	import type { Experience } from './Experience';
	import { fade, fly, crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let experiences;
	let activeIds: Set<string> = new Set();

	function toggle(id: string) {
		if (activeIds.has(id)) {
			const copy = new Set(activeIds);
			copy.delete(id);
			activeIds = copy;
		} else {
			activeIds = new Set(activeIds).add(id) as Set<string>;
			activeIds = new Set(activeIds);
		}
	}

	function collapse() {
		activeIds = new Set();
	}

	let selected: Experience | null | any = null;

	const [send, receive] = crossfade({
		duration: (d) => Math.max(0, d * 0),
		fallback(node, params) {
			return {
				duration: 0,
				css: (t) => `opacity: ${t}`
			};
		}
	});
</script>

<section
	id="experience"
	class="mx-auto max-w-5xl"
	role="button"
	tabindex="0"
	on:click={collapse}
	on:keydown={(e) => e.key === 'Escape' && collapse()}
>
	<!-- <h2 class="mb-8 pt-6 text-2xl font-bold">Experience</h2> -->

	<div
		class="grid grid-cols-1 gap-6
		"
	>
		{#each experiences as exp (exp.id)}
			<button type="button" on:click|stopPropagation class="relative" animate:flip>
				{#if activeIds.has(exp.id)}
					<div
						in:receive={{ key: exp.id }}
						role="button"
						tabindex="0"
						on:click={() => toggle(exp.id)}
						on:keydown={(e) => e.key === 'Enter' && toggle(exp.id)}
					>
						<ExperienceCard {...exp} />
					</div>
				{:else}
					<div
						role="button"
						tabindex="0"
						out:send={{ key: exp.id }}
						on:click={() => toggle(exp.id)}
						on:keydown={(e) => e.key === 'Enter' && toggle(exp.id)}
					>
						<ExperiencePreview {...exp} />
					</div>
				{/if}
			</button>
		{/each}
	</div>

	<ExperienceModal experience={selected} onClose={() => (selected = null)} />
</section>
