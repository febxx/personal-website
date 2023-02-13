import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

function Nav() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<nav className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center pb-5 pt-4 px-2 md:px-0">
			<div className="font-cond text-4xl whitespace-nowrap">
				<a href="/">
					<span className="text-primary">{`<`}fe</span>
					<span className="dark:text-white">bri{`/>`}</span>
				</a>
			</div>
			<div>
				<ul className="flex lg:text-lg items-center space-x-4 lg:space-x-10 py-2 lg:py-0 dark:text-white">
					<li className="border-b-4 border-primary">
						<a href="/">About</a>
					</li>
					<li className="border-b-4 border-primary">
						<a href="/projects">Projects</a>
					</li>
					<li>
						<div className="transition duration-500 ease-in-out rounded-full p-2">
							{theme === "dark" ? (
								<FaSun
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="text-white text-xl cursor-pointer"
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
