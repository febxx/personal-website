import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import ShowMoreText from "react-show-more-text";

function ProjectItem({ id, title, description, image, url }) {
	const [tags, setTags] = useState([]);

	useEffect(() => {
		getTags();

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<a href={url}>
					<img
						className="rounded-md mb-4"
						src={`https://wftnjhfflmgweuuiovjo.supabase.co/storage/v1/object/public/images/${image}`}
						alt={title}
					/>
				</a>
				<h1 className="mb-1 font-semibold text-lg">{title}</h1>
				<ShowMoreText
					/* Default options */
					lines={2}
					more="Show more"
					less="Show less"
					className="mb-4 text-gray-600 dark:text-gray-100 text-justify"
					truncatedEndingComponent={"... "}
				>
					{description}
				</ShowMoreText>
				<div>
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