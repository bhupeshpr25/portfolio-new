<svelte:head>
	<title>Page not found</title>
	<meta name="title" content="404" />
	<meta name="description" content="Page not found" />
</svelte:head>

<div class="flex items-center justify-center w-screen h-fit">
	<div class="">
		<div class="flex flex-col items-center justify-center py-24 lg:py-24">
			<h1
				class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-7xl lg:text-9xl font-mono"
			>
				404
			</h1>

			<p class="mt-10 text-2xl font-bold text-center text-gray-800 md:text-3xl">
				<span class="text-gray-100">Oops!</span>
			</p>
			<p class="my-4 text-center text-gray-400 md:text-lg">
				The page you are looking for does not exist.
			</p>
			<a
				class="relative font-semibold text-gray-300 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-teal-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
          "
				href="/">Go Home</a
			>
		</div>
	</div>
</div>
