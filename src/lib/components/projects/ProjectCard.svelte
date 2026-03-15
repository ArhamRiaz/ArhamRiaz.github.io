<script lang="ts">
	import type { Project } from './Projects.ts';

	export let project: Project;

	let videoEl: HTMLVideoElement;
	let videoReady = false;
	let hovered = false;

	function handleMouseEnter() {
		hovered = true;
		if (videoEl && project.video) {
			videoEl.play().catch(() => {});
		}
	}

	function handleMouseLeave() {
		hovered = false;
		if (videoEl) {
			videoEl.pause();
			videoEl.currentTime = 0;
		}
	}

	// Mobile tap toggle
	function handleClick() {
		if (!project.video) return;
		if (hovered) {
			handleMouseLeave();
		} else {
			handleMouseEnter();
		}
	}

	$: showVideo = hovered && videoReady && !!project.video;
</script>

<div class="group" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} role="group">
	<!-- Media container -->
	<div
		class="relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-(--color-border) dark:bg-(--color-border-dark)"
		on:click={handleClick}
		on:keydown={(e) => e.key === 'Enter' && handleClick()}
		role="button"
		tabindex="0"
	>
		<!-- Thumbnail -->
		<img
			src={project.thumbnail}
			alt={project.name}
			class="absolute inset-0 h-full w-full object-cover transition-all duration-500
        {!project.video ? 'group-hover:scale-[1.03]' : ''}
        {showVideo ? 'opacity-0' : 'opacity-100'}"
		/>

		<!-- Video (preloaded but hidden until hovered) -->
		{#if project.video}
			<video
				bind:this={videoEl}
				src={project.video}
				muted
				loop
				playsinline
				preload="metadata"
				on:canplay={() => (videoReady = true)}
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500
          {showVideo ? 'opacity-100' : 'opacity-0'}"
			></video>
		{/if}

		<!-- Hover hint for projects with video -->
		{#if project.video && !hovered}
			<div
				class="absolute right-3 bottom-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white uppercase opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100"
			>
				Preview
			</div>
		{/if}
	</div>

	<!-- Text content -->
	<div class="space-y-3">
		<div class="flex items-start justify-between gap-4">
			<h3 class="font-display text-xl text-(--color-ink) italic dark:text-(--color-ink-dark)">
				{project.name}
			</h3>

			<!-- Links -->
			<div class="flex shrink-0 items-center gap-3 pt-0.5">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
						class="text-s flex items-center gap-1.5 text-stone-600 transition-colors hover:text-(--color-ink) dark:text-zinc-400 dark:hover:text-(--color-ink-dark)"
					>
						<img src="./github.png" alt="GitHub logo" class="h-4 w-4 dark:invert" />
						GitHub
					</a>
				{/if}
				{#if project.link}
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Live site"
						class="text-s text-stone-600 transition-colors hover:text-(--color-ink) dark:text-zinc-400 dark:hover:text-(--color-ink-dark)"
					>
						Live ↗
					</a>
				{/if}
			</div>
		</div>

		<p class="text-m leading-relaxed text-stone-600 dark:text-zinc-400">
			{project.description}
		</p>

		<!-- Tags -->
		<div class="flex flex-wrap gap-2">
			{#each project.tech as tag}
				<span
					class="rounded-full border border-(--color-border) px-2.5 py-0.5 text-[11px] tracking-wide text-stone-600 dark:border-(--color-border-dark) dark:text-zinc-400"
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</div>
