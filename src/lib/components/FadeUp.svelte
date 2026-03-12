<script lang="ts">
	import { onMount } from 'svelte';

	let { delay = 0, children } = $props<{ delay?: number; children?: any }>();

	let el: HTMLDivElement;
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						visible = true;
					}, delay);
					observer.disconnect();
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div bind:this={el} class="fade-up" class:visible style="transition-delay: {delay}ms">
	{@render children?.()}
</div>

<style>
	.fade-up {
		opacity: 0;
		transform: translateY(32px);
		transition:
			opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.fade-up.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
