<script>
	// export let experience;
	export let company;
	export let role;
	export let tech;
	export let logo;
	export let dates;
</script>

<div
	class="cursor-pointer rounded-xl bg-stone-100 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:bg-stone-200 dark:bg-zinc-950 dark:hover:bg-zinc-900"
>
	<div class="flex items-start gap-4">
		<div
			class="flex h-12 w-12 items-center justify-center rounded-lg
			       bg-stone-200 text-sm font-semibold
			       dark:bg-zinc-800"
		>
			<img src={logo} alt="logo" />
		</div>

		<div class="flex-1 text-left">
			<!-- <h3 class="font-medium">{experience.role}</h3>
			<p class="text-sm text-zinc-500">{experience.company}</p> -->
			<div class="flex flex-col gap-1 text-left sm:flex-row sm:items-center sm:justify-start">
				<div>
					<h3 class="text-lg font-semibold">{role}</h3>
					<p class="text-sm text-zinc-400">{company}</p>
				</div>
				<span class="ml-auto text-sm text-zinc-500">{dates}</span>
			</div>

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
