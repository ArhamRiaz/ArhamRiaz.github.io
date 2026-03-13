<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import ProjectPreview from './ProjectPreview.svelte';
	import type { Project } from './Projects';

	export let projects;
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

	let selected: Project | null | any = null;
</script>

<section
	id="project"
	class="mx-auto max-w-5xl"
	role="button"
	tabindex="0"
	on:click={collapse}
	on:keydown={(e) => e.key === 'Escape' && collapse()}
>
	<div
		class="grid grid-cols-1
					gap-6
					
					"
	>
		{#each projects as exp (exp.id)}
			<button type="button" on:click|stopPropagation class="relative" animate:flip>
				<!-- {#if activeIds.has(exp.id)}
					<div
						in:fly={{ y: 12, duration: 240 }}
						out:fly={{ y: -8, duration: 200 }}
						role="button"
						tabindex="0"
						on:click={() => toggle(exp.id)}
						on:keydown={(e) => e.key === 'Enter' && toggle(exp.id)}
					>
						<ProjectCard {...exp} />
					</div>
				{:else} -->
				<a href={exp.link} target="_blank"
					><div
						role="button"
						tabindex="0"
						in:fly={{ y: -8, duration: 200 }}
						out:fly={{ y: 12, duration: 200 }}
						on:click={() => exp.id}
						on:keydown={(e) => e.key === 'Enter' && toggle(exp.id)}
					>
						<ProjectPreview {...exp} />
					</div></a
				>
				<!-- {/if} -->
			</button>
		{/each}
	</div>
</section>
