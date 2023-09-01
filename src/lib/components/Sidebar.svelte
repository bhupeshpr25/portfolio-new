<script lang="ts">
	import github from '$lib/assets/icons/github.png';
	import twitter from '$lib/assets/icons/twitter.png';
	import linkedin from '$lib/assets/icons/linkedin.png';
	import mail from '$lib/assets/icons/mail.png';

	const links = [
		{
			icon: github,
			href: 'https://github.com/bhupeshpr25'
		},
		{
			icon: twitter,
			href: 'https://twitter.com/bhupeshpr25'
		},
		{
			icon: linkedin,
			href: 'https://www.linkedin.com/in/bhupesh-pradhan/'
		},
		{
			icon: mail,
			href: 'mailto:pradhanbhupesh0@gmail.com'
		}
	];
</script>

<nav class="fixed hidden left-0 top-1/3 z-50 px-8 py-3 bg-transparent lg:flex flex-col space-y-8">
	{#each links as { icon, href }}
		<a {href} target="_blank" rel="noreferrer">
			<img
				src={icon}
				width="72"
				height="72"
				alt="github"
				class="h-12 w-12 ease-out hover:translate-y-1 transition-all"
			/>
		</a>
	{/each}
</nav>
