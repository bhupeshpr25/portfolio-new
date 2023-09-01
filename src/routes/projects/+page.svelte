<script lang="ts">
	import { projects } from '../../data/projects';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects - Bhupesh Pradhan</title>
	<meta name="title" content="Bhupesh Pradhan - Software Developer" />
	<meta
		name="description"
		content="Hello, I am Bhupesh Pradhan, a software developer based in India, and I like to build things with code.

    Here are some of my projects"
	/>
</svelte:head>

<div>
	<div class="m-10 ml-8 mt-20 lg:ml-72">
		<h1
			class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 text-3xl lg:text-4xl font-extrabold my-10 lg:ml-8 py-2"
		>
			My projects
		</h1>
	</div>

	<div class="mx-4 flex flex-col items-center justify-center">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>

	<div
		class="bg-gray-700 w-fit p-4 mt-20 h-20 flex items-center mx-auto space-x-4 rounded-xl text-gray-200"
	>
		<div>...and a lot more on my</div>
		<div class="font-bold p-2 rounded-xl bg-gray-800 text-gray-200">
			<a href="https://github.com/bhupeshpr25" target="_blank" rel="noreferrer"> GitHub </a>
		</div>
	</div>
</div>
