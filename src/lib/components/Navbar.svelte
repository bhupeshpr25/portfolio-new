<script lang="ts">
	import logo from '$lib/assets/icons/logo.png';
	import { fade, fly } from 'svelte/transition';
	import Hamburger from './Hamburger.svelte';
	import { page } from '$app/stores';

	let visible = false;

	function showMenu() {
		visible = !visible;
	}

	function hideMenu() {
		visible = false;
	}

	const navs = [
		{
			title: 'About',
			href: '/about'
		},
		{
			title: 'Toolbox',
			href: '/toolbox'
		},
		{
			title: 'Projects',
			href: '/projects'
		},
		{
			title: 'Contact',
			href: '/contact'
		}
	];
</script>

<nav class="container px-6 py-8 md:flex md:justify-between md:items-center">
	<div class="flex md:w-full items-center justify-between">
		<div>
			<a href="/" aria-label="Home">
				<img
					src={logo}
					width="90"
					height="90"
					alt=""
					class="hover:animate-pulse h-12 w-12 lg:h-16 lg:w-16"
				/>
			</a>
		</div>

		<ul class="hidden mr-4 space-x-4 md:flex">
			{#each navs as { title, href }}
				<li aria-current={$page.url.pathname === href ? 'page' : undefined}>
					<a
						class="relative font-semibold text-gray-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
          "
						{href}>{title}</a
					>
				</li>
			{/each}
		</ul>

		<!-- Mobile Menu Button -->
		<div class="flex md:hidden">
			<button
				type="button"
				aria-label="Open Menu"
				on:click={showMenu}
				class="text-gray-400 w-8 hover:text-gray-400 focus:outline-none focus:text-gray-400"
			>
				<Hamburger />
			</button>
		</div>
	</div>

	<!-- Mobile Menu Items-->
	{#if visible}
		<ul
			class="mt-8 space-y-4 md:space-y-0 md:items-center md:space-x-10 md:mt-0"
			in:fly={{ y: 200, duration: 100 }}
			out:fade
		>
			{#each navs as { title, href }}
				<li>
					<a class="text-gray-300 hover:text-teal-400 font-semibold" on:click={hideMenu} {href}
						>{title}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	li[aria-current='page'] a {
		color: #2dd4bf;
	}
</style>
