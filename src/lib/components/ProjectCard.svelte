<script lang="ts">
	import repo from '$lib/assets/icons/repo.png';
	import link from '$lib/assets/icons/link.png';

	interface Project {
		name: string;
		icon: string;
		screenshot: string;
		description: string;
		githubLink: string;
		demoLink: string;
		technologies: string[];
	}

	export let project: Project;
</script>

<div class="m-4 lg:mx-20 lg:my-10 flex items-center justify-center font-mono">
	<div class="rounded-xl my-4 w-84 md:w-full h-full lg:h-64 bg-gray-700 shadow-lg">
		<div class="md:flex mb-2 leading-none max-w-4xl">
			<div class="flex items-center">
				<div class="overflow-hidden p-4 cursor-pointer rounded-xl relative group">
					<div
						class="rounded-lg z-50 opacity-100 group-hover:opacity-0 transition duration-300 ease-in-out cursor-pointer absolute bg-gradient-to-t -top-5 right-0 pt-30 bg-transparent text-white flex items-end"
					>
						<div
							class="p-3 text-2xl bg-none rounded-lg group-hover:opacity-0 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out"
						>
							<div class="font-bold mt-4">
								<img src={project.icon} width="32" height="32" alt="" />
							</div>
						</div>
					</div>

					<div class="h-48">
						<img
							src={project.screenshot}
							alt={project.name}
							height={250}
							width={400}
							loading="lazy"
							class="overflow-hidden rounded-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300 ease-in-out"
						/>
					</div>
				</div>
			</div>

			<div class="text-gray-300 mx-2 lg:w-1/2 lg:ml-4">
				<div class="flex items-start">
					<p class="pt-4 ml-2 text-xl lg:text-2xl font-bold">{project.name}</p>
				</div>
				<hr class="hr-text" data-content="" />
				<p class="text-lg p-2 my-2">{project.description}</p>

				<div class="lg:ml-2 my-3">
					<ul class="flex items-center justify-stretch space-x-1">
						{#each project.technologies as tech, index}
							<li
								class="rounded-lg text-white text-center text-sm font-medium px-2 py-1.5 bg-gray-800 flex items-center justify-center"
							>
								{tech}
							</li>
						{/each}
					</ul>
				</div>

				<div class="px-1 mt-4 pb-2">
					<div class="flex justify-between items-center">
						<a
							class="p-1 rounded-md border-2 border-gray-500 hover:border-teal-400"
							href={project.githubLink}
							target="_blank"
							rel="noreferrer"
						>
							<img src={repo} width="28" height="24" alt="github repo" loading="lazy" />
						</a>
						<a
							class="p-1 rounded-md border-2 border-gray-500 hover:border-teal-400"
							href={project.demoLink}
							target="_blank"
							rel="noreferrer"
						>
							<img src={link} width="24" height="24" alt="demo link" loading="lazy" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
