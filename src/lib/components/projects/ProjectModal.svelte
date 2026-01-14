<script lang="ts">

	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from './Projects';

	export let project: Project | null = null;
	export let onClose;
</script>

{#if project}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div
			class="absolute inset-0 bg-black/50 backdrop-blur-sm"
			role="button"
			tabindex="0"
			onclick={onClose}
			onkeydown={(e) => e.key === 'Escape' && onClose()}
		></div>

		<div class="relative z-10 w-full max-w-2xl px-4">
			<ProjectCard {...project} />

			<button
				onclick={onClose}
				class="absolute top-6 right-6 text-sm text-zinc-400 hover:text-zinc-600"
			>
				✕
			</button>
		</div>
	</div>
{/if}