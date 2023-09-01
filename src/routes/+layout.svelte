<script>
	import '../app.css';
	import { fly } from 'svelte/transition';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;
</script>

{#key data.url}
	<Navbar />
	<Sidebar />
	<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
		<slot />
	</div>
	<Footer />
{/key}

<style lang="postcss">
	:global(html) {
		background-color: #1b1c28;
	}
</style>
