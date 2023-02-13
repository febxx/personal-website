import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

function ProjectItem({ id, title, description, image }) {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		getTags();
	}, []);

	const getTags = async () => {
		try {
			const { error, data } = await supabase
				.from("project_tags")
				.select("project_id, techstack_id, tag: techstack (title)")
				.eq("project_id", id);

			if (error) throw error;
			if (data) {
				setTags(data);
			}
		} catch (error) {
			alert(error.error_description || error.message);
		}
	};

	return (
		<div className="bg-gray-100 dark:bg-gray-800" href="">
			<div className="p-4 text-gray-600 dark:text-white rounded-md">
				<img
					className="rounded-md mb-4"
					src={`https://wftnjhfflmgweuuiovjo.supabase.co/storage/v1/object/public/images/${image}`}
					alt={title}
				/>
				<h1 className="mb-1 font-semibold text-lg">{title}</h1>
				<p className="mb-4 text-gray-600 dark:text-gray-100">{description}</p>
				<div className="">
					{tags.map((value, index) => {
						return (
							<span className="inline-block bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-300 rounded text-sm px-3 py-1 my-0.5 mr-1.5">
								{value.tag.title}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
