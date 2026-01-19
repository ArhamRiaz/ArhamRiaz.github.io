<script>
	// export let experience;
	export let name;
	export let description;
	export let github;
	export let thumbnail;
	export let tech;
</script>

<div
	class="cursor-pointer rounded-xl bg-stone-100 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:bg-stone-200 dark:bg-zinc-950 dark:hover:bg-zinc-900"
>
	<div class="flex items-start gap-4">
		<div
			class="flex h-24 w-40 items-center justify-center rounded-lg
			       bg-stone-200 text-sm font-semibold
			       dark:bg-zinc-800"
		>
			<img src={thumbnail} alt="thumbnail" />
		</div>

		<div class="flex-1">
			<!-- <h3 class="font-medium">{experience.role}</h3>
			<p class="text-sm text-zinc-500">{experience.company}</p> -->
			<div class="flex flex-col gap-1 pb-4 text-left sm:flex-row sm:items-center sm:justify-start">
				<h3 class="text-2xl font-semibold">{name}</h3>
				<!-- <p class="text-sm text-zinc-400">{company}</p> -->
				<span class="ml-auto text-sm text-zinc-500"
					><a href={github} target="_blank" rel="noopener noreferrer" on:click|stopPropagation
						><img src="/github.png" alt="github logo" class="h-8" />
					</a></span
				>
			</div>
			<div>{description}</div>

			<div class="mt-3 flex flex-wrap gap-2">
				{#each tech as t}
					<span
						class=" bg-stone-100 px-2 py-0.5 text-xs
						       dark:bg-zinc-800"
					>
						{t}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
