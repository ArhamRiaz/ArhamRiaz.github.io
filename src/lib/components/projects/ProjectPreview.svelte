<script>
	// export let experience;
	export let name;
	// export let description;
	// export let github;

	export let tech;
</script>

<div
	class="cursor-pointer rounded-2xl border border-zinc-800
	       bg-zinc-900 p-5
	       transition hover:-translate-y-1 hover:shadow-lg"
>
	<div class="flex items-start gap-4">
		<!-- <div
			class="flex h-12 w-12 items-center justify-center rounded-lg
			       bg-stone-200 text-sm font-semibold
			       dark:bg-zinc-800"
		>
			<img src={logo} alt="logo" />
		</div> -->

		<div class="flex-1">
			<!-- <h3 class="font-medium">{experience.role}</h3>
			<p class="text-sm text-zinc-500">{experience.company}</p> -->
			<div>
				<h3 class="font-semibold">{name}</h3>
				<!-- <p class="text-sm text-zinc-400">{company}</p> -->
			</div>

			<div class="mt-3 flex flex-wrap gap-2">
				{#each tech as t}
					<span
						class="rounded-full bg-stone-100 px-2 py-0.5 text-xs
						       dark:bg-zinc-800"
					>
						{t}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
