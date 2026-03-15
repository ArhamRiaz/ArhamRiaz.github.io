<script lang="ts">
	import { projects } from './Projects';
	import ProjectCard from './ProjectCard.svelte';
	import FadeUp from '../FadeUp.svelte';
</script>

<section id="projects" class="pb-32">
	<div class="flex items-start gap-16">
		<div class="min-w-0 flex-1">
			<FadeUp>
				<p
					class="mb-8 text-xl font-semibold tracking-widest text-stone-400 uppercase dark:text-zinc-500"
				>
					Projects
				</p>
			</FadeUp>

			<div class="space-y-16">
				{#each projects as project, i}
					<FadeUp delay={i * 0.08}>
						<ProjectCard {project} />
					</FadeUp>
				{/each}
			</div>
		</div>

		<!-- Currently sidebar — sticky, only visible on xl+ -->
		<!-- <aside class="sticky top-28 hidden w-40 shrink-0 xl:block">
			<FadeUp delay={0.2}>
				<p class="mb-5 text-[10px] font-semibold tracking-[0.18em] text-(--color-muted) uppercase">
					Currently
				</p>
				<div class="space-y-5">
					{#each currently as item}
						<CurrentlyCard {item} />
					{/each}
				</div>
			</FadeUp>
		</aside> -->
	</div>

	<!-- Currently strip — mobile only (below projects) -->
	<!-- <div class="mt-16 xl:hidden">
		<FadeUp>
			<p class="mb-5 text-[10px] font-semibold tracking-[0.18em] text-(--color-muted) uppercase">
				Currently
			</p>
			<div class="flex gap-5 overflow-x-auto pb-2">
				{#each currently as item}
					<div class="w-32 shrink-0">
						<CurrentlyCard {item} />
					</div>
				{/each}
			</div>
		</FadeUp>
	</div> -->
</section>
