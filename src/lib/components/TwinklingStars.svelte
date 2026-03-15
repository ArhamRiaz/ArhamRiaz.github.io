<script lang="ts">
	import { onMount } from 'svelte';

	export let starImage = './single_star.png';
	export let numberOfStars = 50;
	export let minSize = 10;
	export let maxSize = 30;
	export let twinkleSpeed = 2;

	// Stars won't appear in the horizontal band between these two percentages.
	// 22–78% covers a centered max-w-3xl column on most screens.
	export let deadZoneLeft = 22;
	export let deadZoneRight = 78;

	type Star = {
		id: number;
		top: number;
		left: number;
		size: number;
		duration: number;
		delay: number;
		intensity: number;
	};

	let stars: Star[] = [];

	function randomLeft(): number {
		// Randomly place in left margin OR right margin — never the center band
		return Math.random() < 0.5
			? Math.random() * deadZoneLeft
			: deadZoneRight + Math.random() * (100 - deadZoneRight);
	}

	onMount(() => {
		stars = Array.from({ length: numberOfStars }, (_, i) => ({
			id: i,
			top: Math.random() * 100,
			left: randomLeft(),
			size: Math.random() * (maxSize - minSize) + minSize,
			duration: twinkleSpeed + Math.random() * 2,
			delay: Math.random() * 3,
			intensity: Math.random() * 0.5 + 0.5
		}));
	});
</script>

<div class="twinkling-stars-container">
	{#each stars as star (star.id)}
		<div
			class="twinkling-star"
			style="
				top: {star.top}%;
				left: {star.left}%;
				width: {star.size}px;
				height: {star.size}px;
				animation-duration: {star.duration}s;
				animation-delay: {star.delay}s;
				opacity: {star.intensity};
			"
		>
			<img src={starImage} alt="" />
		</div>
	{/each}
</div>

<style>
	.twinkling-stars-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		/* keep the stars behind page content */
		z-index: 0;
		overflow: hidden;
	}

	.twinkling-star {
		position: absolute;
		animation: twinkle ease-in-out infinite;
	}

	.twinkling-star img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
	}

	/* Twinkling animation - fades in and out */
	@keyframes twinkle {
		0%,
		100% {
			opacity: 0.3;
			transform: scale(1);
			filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
			filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1));
		}
	}

	/* Alternative: Pulse animation for a different effect */
	@keyframes pulse {
		0%,
		100% {
			opacity: 0.5;
			filter: brightness(0.8);
		}
		50% {
			opacity: 1;
			filter: brightness(1.2);
		}
	}

	/* Shimmer animation - more subtle */
	@keyframes shimmer {
		0%,
		100% {
			opacity: 0.6;
			filter: brightness(1);
		}
		25% {
			opacity: 0.8;
			filter: brightness(1.1);
		}
		75% {
			opacity: 0.9;
			filter: brightness(1.15);
		}
	}
</style>
