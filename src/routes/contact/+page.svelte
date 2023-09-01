<svelte:head>
	<title>Contact - Bhupesh Pradhan</title>
	<meta name="title" content="Bhupesh Pradhan - Software Developer" />
	<meta
		name="description"
		content="Hello, I am Bhupesh Pradhan, a software developer based in India, and I like to build things with code.

    Here is how you can connect with me"
	/>
</svelte:head>

<section>
	<div class="m-3 flex flex-col lg:mx-40 lg:flex-row">
		<div class="hidden lg:flex lg:flex-col lg:w-1/2 m-6 lg:mt-32">
			<h1 class="text-3xl text-gray-100 m-5 font-semibold">Want to know more?</h1>

			<p class="text-lg text-gray-200 m-5">
				Check out my social links or use the contact form. <br /> I usually reply back in less than a
				day :D
			</p>

			<div
				class="group text-2xl m-3 mt-12 text-gray-300 transition duration-200 ease-in-out hover:text-cyan-500"
			>
				{' '}
				<span
					aria-hidden="true"
					class="inline-block mx-1 translate-x-0 transition-transform duration-200 ease-in-out group-hover:-translate-x-20"
				>
					↜
				</span>
				Connect via socials
			</div>
		</div>

		<!-- form -->

		<div class="bg-inherit rounded-3xl overflow-hidden lg:w-1/2">
			<p class="text-2xl text-center font-semibold text-gray-200 m-5">Say Hello 👋</p>
			<div class="px-10 pt-4 pb-8 rounded-tr-4xl">
				<form class="mt-12" action="https://airform.io/pradhanbhupesh0@gmail.com" method="post">
					<div class="relative">
						<input
							id="name"
							name="name"
							aria-label="name"
							type="text"
							class="peer h-10 w-full bg-inherit border-b-2 border-cyan-500 text-gray-100 placeholder-transparent focus:outline-none focus:border-teal-500"
							placeholder=""
						/>
						<div
							class="absolute left-0 -top-3.5 text-gray-100 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
						>
							Name
						</div>
					</div>
					<div class="relative my-10">
						<input
							id="email"
							name="email"
							aria-label="email"
							type="text"
							class="peer h-10 w-full bg-inherit border-b-2 border-cyan-500 text-gray-100 placeholder-transparent focus:outline-none focus:border-teal-500"
							placeholder=""
						/>
						<div
							class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-sm"
						>
							Email address
						</div>
					</div>
					<div class="relative">
						<textarea
							id="password"
							name="password"
							class="peer h-40 w-full bg-inherit border-b-2 border-cyan-500 text-gray-100 placeholder-transparent focus:outline-none focus:border-teal-500"
							placeholder="Password"
						/>
						<div
							class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-500 peer-focus:text-sm"
						>
							Your Message
						</div>
					</div>

					<button
						value="Send"
						class="mt-10 px-4 py-3 rounded-lg bg-cyan-800 hover:bg-cyan-700 text-white font-semibold text-center block w-full focus:outline-none cursor-pointer"
					>
						<span class="bg-inherit text-white font-semibold"> send </span>
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
