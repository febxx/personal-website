import React, { useState } from "react";

function Home() {
	const [mode, setMode] = useState(false);
  
	return (
		<div className={`container mx-auto ${mode && 'dark'}`}>
			<div className="lg:mx-32 lg:mt-12">
				<nav className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center pb-5 pt-4 px-2 md:px-0">
					<div className="font-cond text-4xl whitespace-nowrap">
						<a href="https://haecal.my.id">
							<span className="text-red-500">m</span>
							<span className="dark:text-white">haecal</span>
						</a>
					</div>
					<div>
						<ul className="flex lg:text-lg items-center space-x-4 lg:space-x-10 py-2 lg:py-0 dark:text-white">
							<li className="border-b-4 border-red-500">
								<a href="https://haecal.my.id/#docs">dokumentasi</a>
							</li>
							<li className="border-b-4 border-red-500">
								<a href="https://haecal.my.id/#projects">project</a>
							</li>
							<li>
								<a id="switchTheme" className="cursor-pointer focus:outline-none" onClick={() => setMode(!mode)}>
									<svg
										id="sun"
										className={`w-6 h-6 text-red-500 ${mode && 'hidden'}`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
											clip-rule="evenodd"
										/>
									</svg>

									<svg
										id="moon"
										className={`w-6 h-6 text-white ${!mode && 'hidden'}`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Home;
