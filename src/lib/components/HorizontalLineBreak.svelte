<script>
	export let height = 12; // px
	export let className = '';
	export let ariaLabel = 'Section separator';
</script>

<hr
	aria-label={ariaLabel}
	class={className}
	style={`background-image: url('/line-break - Copy.png'); background-repeat: repeat-x; background-position: center; background-size: auto ${height}px; height: ${height}px; border: none;`}
/>
