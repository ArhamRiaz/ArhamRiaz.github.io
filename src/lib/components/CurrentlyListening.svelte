<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	const LASTFM_API_KEY = '824f715736228f698a7b9d2b6c9e1050';
	const LASTFM_USERNAME = 'bangloo';

	type Track = {
		name: string;
		artist: string;
		albumArt: string;
		url: string;
		nowPlaying: boolean;
	};

	let track: Track | null = null;
	let error = false;
	let interval: ReturnType<typeof setInterval>;

	async function fetchTrack() {
		try {
			const res = await fetch(
				`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&limit=1&format=json`
			);
			const data = await res.json();
			const t = data.recenttracks?.track?.[0];
			if (!t) return;

			track = {
				name: t.name,
				artist: t.artist['#text'],
				// index 2 = medium (174x174), index 3 = large (300x300)
				albumArt: t.image[3]['#text'] || t.image[2]['#text'],
				url: t.url,
				nowPlaying: t['@attr']?.nowplaying === 'true'
			};
			error = false;
		} catch {
			error = true;
		}
	}

	onMount(() => {
		fetchTrack();
		// Re-fetch every 60 seconds so it stays live while the page is open
		interval = setInterval(fetchTrack, 60_000);
	});

	onDestroy(() => clearInterval(interval));
</script>

<div class="group w-40">
	<p class="mb-3 text-xs text-stone-400 dark:text-zinc-500">
		Listening
		{#if track?.nowPlaying}
			<span
				class="ml-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
				title="Now playing"
			></span>
		{/if}
	</p>

	{#if track && !error}
		<a href={track.url} target="_blank" rel="noopener noreferrer" class="block">
			<div
				class="overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
			>
				{#if track.albumArt}
					<img
						src={track.albumArt}
						alt="{track.name} by {track.artist}"
						class="w-full object-cover"
					/>
				{:else}
					<!-- Fallback if Last.fm has no art (rare) -->
					<div
						class="flex h-40 w-full items-center justify-center rounded-xl bg-stone-200 dark:bg-zinc-800"
					>
						<span class="text-2xl">🎵</span>
					</div>
				{/if}
			</div>
			<p class="mt-2 truncate text-xs font-medium text-stone-700 dark:text-zinc-300">
				{track.name}
			</p>
			<p class="truncate text-xs text-stone-400 dark:text-zinc-500">{track.artist}</p>
		</a>
	{:else if error}
		<div
			class="flex h-40 w-full items-center justify-center rounded-xl bg-stone-200 dark:bg-zinc-800"
		>
			<span class="text-xs text-stone-400 dark:text-zinc-500">Unavailable</span>
		</div>
	{:else}
		<!-- Skeleton while loading -->
		<div class="h-40 w-full animate-pulse rounded-xl bg-stone-200 dark:bg-zinc-800"></div>
		<div class="mt-2 h-3 w-3/4 animate-pulse rounded bg-stone-200 dark:bg-zinc-800"></div>
		<div class="mt-1 h-3 w-1/2 animate-pulse rounded bg-stone-200 dark:bg-zinc-800"></div>
	{/if}
</div>
