import Nav from "../components/Nav";
import { supabase } from "../supabaseClient";
import React, { useState, useEffect } from "react";

import ProjectItem from "../components/project/ProjectItem";

function Projects() {
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
    <>
    <Nav/>
		<div className="my-16">
			<div className="mb-6 grid lg:grid-cols-3 gap-2 container px-3 lg:px-0">
				{loading
					? "Loading.."
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
		</div>
    </>
	);
}

export default Projects;
