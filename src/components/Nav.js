import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Nav() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<nav class="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center pb-5 pt-4 px-2 md:px-0">
			<div class="font-cond text-4xl whitespace-nowrap">
				<a href="/">
					<span class="text-primary">f</span>
					<span class="dark:text-white">ebri </span>
					<span class="text-primary">a</span>
					<span class="dark:text-white">ji </span>
					<span class="text-primary">m</span>
					<span class="dark:text-white">aulana</span>
				</a>
			</div>
			<div>
				<ul class="flex lg:text-lg items-center space-x-4 lg:space-x-10 py-2 lg:py-0 dark:text-white">
					<li class="border-b-4 border-primary">
						<a href="https://haecal.my.id/#docs">dokumentasi</a>
					</li>
					<li class="border-b-4 border-primary">
						<a href="https://haecal.my.id/#projects">project</a>
					</li>
					<li>
						<div className="transition duration-500 ease-in-out rounded-full p-2">
							{theme === "dark" ? (
								<FaSun
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="text-primary text-xl cursor-pointer"
								/>
							) : (
								<FaMoon
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="text-gray-900 text-xl cursor-pointer"
								/>
							)}
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
