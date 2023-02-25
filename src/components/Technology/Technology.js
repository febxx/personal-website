import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

import Loading from "../Loading";

function Technology() {
	const [tech, setTech] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getTech();
	}, []);

	const getTech = async () => {
		setLoading(true);
		try {
			const { error, data } = await supabase
				.from("tech")
				.select("*")
				.order("id", { ascending: true });

			if (error) throw error;
			if (data) {
				setTech(data);
			}
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="mb-14">
			<h1 className="font-cond font-bold text-gray-800 dark:text-white text-xl px-2 md:px-0 py-2">
				<span className="text-primary" id="projects">
					#
				</span>{" "}
				Tech & Tools
			</h1>

			<div className="my-3 grid grid-cols-5 gap-4 lg:grid-cols-10 md:grid-cols-10 sm:grid-cols-5 lg:gap-10 sm:gap-10 container px-3 lg:px-0">
				{loading ? (
					<Loading />
				) : (
					tech.map((value, index) => {
						return (
							<img
								className="justify-center items-center"
								src={`https://wftnjhfflmgweuuiovjo.supabase.co/storage/v1/object/public/tech/${value.image}`}
								alt={value.name}
							/>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Technology;
