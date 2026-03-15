<script lang="ts">
	import { slide } from 'svelte/transition';

	export let company: string;
	export let role: string;
	export let period: string;
	export let location: string = '';
	export let bullets: string[] = [];
	export let tags: string[] = [];
	export let link: string = '';
</script>

<div
	class="group grid cursor-pointer grid-cols-[8rem_1fr] gap-x-8 py-6 transition-opacity hover:opacity-60"
>
	<!-- Date -->
	<p class="shrink-0 pt-0.5 text-xs leading-relaxed text-stone-600 tabular-nums dark:text-zinc-400">
		{period}
	</p>

	<!-- Content -->
	<div>
		<div class="mb-0.5 flex flex-wrap items-baseline gap-x-2">
			{#if link}
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					class="text-base font-medium text-(--color-ink) transition-opacity hover:opacity-60 dark:text-(--color-ink-dark)"
					on:click|stopPropagation
				>
					{company} ↗
				</a>
			{:else}
				<span class="text-base font-medium text-(--color-ink) dark:text-(--color-ink-dark)">
					{company}
				</span>
			{/if}
			<span class="text-sm text-stone-600 dark:text-zinc-400">{role}</span>
		</div>

		{#if location}
			<p class="mt-0.5 text-xs text-stone-600 dark:text-zinc-400">{location}</p>
		{/if}

		<!-- Bullets — slide in when expanded -->
		{#if bullets.length}
			<ul class="mt-4 space-y-2" transition:slide={{ duration: 300 }}>
				{#each bullets as bullet}
					<li class="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
						<span
							class="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-600 opacity-50 dark:bg-zinc-400"
						></span>
						{bullet}
					</li>
				{/each}
			</ul>
		{/if}

		{#if tags.length}
			<div class="mt-3 flex flex-wrap gap-2" transition:slide={{ duration: 300 }}>
				{#each tags as tag}
					<span
						class="rounded-full border border-(--color-border) px-2.5 py-0.5 text-[11px] tracking-wide text-stone-600 dark:border-(--color-border-dark) dark:text-zinc-400"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
