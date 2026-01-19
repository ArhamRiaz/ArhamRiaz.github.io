<script>
	export let company;
	export let role;
	export let dates;
	export let bullets;
	export let tech;
	export let logo;
	//export let expanded = false;
</script>

<div class="relative">
	<!-- Timeline dot -->
	<!-- <span class="absolute top-2 left-3 h-3 w-3 rounded-full bg-indigo-500"></span> -->

	<div
		class="rounded-xl bg-stone-100 p-5 text-left shadow-sm hover:bg-stone-200 dark:bg-zinc-950 dark:hover:bg-zinc-900"
	>
		<div class="flex flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-start">
			<div
				class="flex h-12 w-12 items-center justify-center rounded-lg
			       bg-stone-200 text-sm font-semibold
			       dark:bg-zinc-800"
			>
				<img src={logo} alt="logo" />
			</div>
			<div class="ml-3">
				<h3 class="text-left text-lg font-semibold text-black dark:text-white">
					{role}
				</h3>
				<p class="text-sm text-zinc-400">{company}</p>
			</div>
			<span class="ml-auto text-sm text-zinc-500">{dates}</span>
		</div>

		<ul class="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
			{#each bullets as bullet}
				<li class="flex gap-2">
					<span class="mt-1 text-indigo-400">•</span>
					<span>{bullet}</span>
				</li>
			{/each}
		</ul>

		{#if tech.length}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each tech as t}
					<span class=" px-3 py-1 text-xs dark:bg-zinc-800 dark:text-zinc-300">
						{t}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
