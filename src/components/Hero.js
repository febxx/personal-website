import React from "react";

function Hero() {
	return (
		<div class="bg-gray-50 dark:bg-gray-800 p-7 border-2 border-dashed border-gray-400 mb-5">
			<div class="flex justify-center">
				<img
					src="https://avatars.githubusercontent.com/u/41862424?v=4"
					alt="Febri"
					class="rounded-full h-20 md:h-24 ring-2 ring-offset-4 md:ring-3 md:ring-offset-7 dark:ring-offset-gray-800 ring-primary"
				/>
			</div>
			<div class="mt-4 text-center">
				<h1 class="font-bold font-sans text-gray-800 dark:text-white">
					Febri Aji Maulana
				</h1>
				<p class="text-sm dark:text-gray-300 font-cond">
					<span class="text-primary">Software Developer</span>
				</p>
			</div>
		</div>
	);
}

export default Hero;
