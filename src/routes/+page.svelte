<script lang="ts">
	import github from '$lib/assets/icons/github.png';
	import twitter from '$lib/assets/icons/twitter.png';
	import linkedin from '$lib/assets/icons/linkedin.png';
	import mail from '$lib/assets/icons/mail.png';

	import HeroImage from '$lib/components/HeroImage.svelte';
</script>

<svelte:head>
	<title>Bhupesh Pradhan</title>
	<meta name="title" content="Bhupesh Pradhan - Software Developer" />
	<meta
		name="description"
		content="Hello, I am Bhupesh Pradhan, a software developer based in India, and I like to build things with code."
	/>
</svelte:head>

<div class="flex items-center justify-center mb-48 md:mb-0">
	<div class="container mx-12 my-10 lg:mx-40 py-4">
		<div class="self-center lg:flex lg:items-center lg:justify-between lg:mx-12">
			<div class="w-80 lg:w-3/5">
				<div>
					<h1 class="text-3xl font-semibold text-gray-100 lg:text-5xl">Hello,</h1>

					<h1 class="text-2xl font-semibold text-gray-200 my-2 lg:text-4xl">I am Bhupesh</h1>

					<p class="text-xl mt-4 text-gray-300 lg:text-2xl">
						I like making backend work, and frontend look good
					</p>
				</div>
				<div class="block mt-10 lg:hidden">
					<div class="flex justify-start pt-4 space-x-4 align-center">
						<a href="https://github.com/bhupeshpr25">
							<img src={github} width="48" height="48" alt="github" />
						</a>
						<a href="https://twitter.com/bhupeshpr25?t=M55rqT55xCDdPDEbF6YUOQ&s=09s">
							<img src={twitter} width="48" height="48" alt="twitter" />
						</a>
						<a href="https://www.linkedin.com/in/bhupesh-pradhan-070311202/">
							<img src={linkedin} width="48" height="48" alt="linkedin" />
						</a>
						<a href="mailto:pradhanbhupesh0@gmail.com">
							<img src={mail} width="48" height="48" alt="mail" />
						</a>
					</div>
				</div>
			</div>

			<div class="hidden lg:block w-96 mb-24 text-blue-500">
				<HeroImage />
			</div>
		</div>
	</div>
</div>
