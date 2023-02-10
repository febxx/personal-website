import React from "react";

function Hero() {
	return (
		<div className="mb-16">
        <h1 className="font-cond font-bold text-gray-800 dark:text-white text-xl px-2 md:px-0 py-2"><span
            className="text-red-500" id="projects">#</span> Project</h1>
        <div className="mb-6 grid lg:grid-cols-3 gap-2 container px-3 lg:px-0">
          <a className="bg-gray-100 dark:bg-gray-800" href="https://cubicash.com">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4 filter grayscale" src="https://haecal.my.id/img/cubicash.png" alt="CUBICASH"/>
              <h1 className="mb-1 font-semibold text-lg">CUBICASH</h1>
              <p className="mb-2 text-xs text-gray-500 dark:text-gray-300">Fullstack Developer</p>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Online game voucher & top up service</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5">Laravel</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5">Bootstrap</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5">Livewire</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5">MySQL</span>
              </div>
            </div>
          </a>
          <a className="bg-gray-100 dark:bg-gray-800" href="https://kanno.id">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4 filter grayscale" src="https://haecal.my.id/img/kanno.png" alt="Kanno"/>
              <h1 className="mb-1 font-semibold text-lg">Kanno</h1>
              <p className="mb-2 text-xs text-gray-500 dark:text-gray-300"><span>Front End Developer (Freelance)</span></p>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Freelance service provider platform</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1">Tailwind</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1">Gulp</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1">Nunjucks</span>
              </div>
            </div>
          </a>
          <a className="bg-gray-100 dark:bg-gray-800" href="https://mhaecal.github.io/simplicity">
            <div className="p-4 text-gray-600 dark:text-white rounded-md">
              <img className="rounded-md mb-4 filter grayscale" src="https://haecal.my.id/img/simplicity.png"
                alt="Simplicity Admin"/>
              <h1 className="mb-1 font-semibold text-lg">Simplicity</h1>
              <p className="mb-2 text-xs text-gray-500 dark:text-gray-300"><span>Front End Developer</span></p>
              <p className="mb-4 text-gray-600 dark:text-gray-100">Simple & clean admin dashboard</p>
              <div className="">
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1">Tailwind</span>
                <span
                  className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1">Vue</span>
              </div>
            </div>
          </a>
        </div>
        <a href="https://haecal.my.id/projects">
          <button className="text-gray-700 dark:text-gray-300 text-center w-full focus:outline-none">--- Lebih banyak
            ---</button>
        </a>
      </div>
	);
}

export default Hero;
