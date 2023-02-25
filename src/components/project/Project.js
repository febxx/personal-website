import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Loading from "../Loading";

import ProjectItem from "./ProjectItem";

function Project() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		setLoading(true);
		try {
			const { error, data } = await supabase
				.from("projects")
				.select("*")
				.order("id", { ascending: false })
        .limit(6);

			if (error) throw error;
			if (data) {
				setProjects(data);
			}
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="mb-16">
			<h1 className="font-cond font-bold text-gray-800 dark:text-white text-xl px-2 md:px-0 py-2">
				<span className="text-primary" id="projects">
					#
				</span>{" "}
				Recently Project
			</h1>

			<div className="mb-6 grid lg:grid-cols-3 gap-2 container px-3 lg:px-0">
				{loading
					? <Loading/>
					: projects.map((value, index) => {
							return (
								<ProjectItem
									id={value.id}
									title={value.title}
									description={value.description}
									image={value.image}
									url={value.url}
								/>
							);
					  })}
			</div>
			{loading ? (
				""
			) : (
				<a href="/projects">
					<button className="text-gray-700 dark:text-gray-300 text-center w-full focus:outline-none">
						Show More
					</button>
				</a>
			)}
		</div>
	);
}

export default Project;
