import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

function Create() {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [url, setUrl] = useState(null);
	const [image, setImage] = useState(null);
	const [loading, setLoading] = useState(false);

	async function uploadImage(e) {
		let file = e.target.files[0];

		e.preventDefault();
		const { data, error } = await supabase.storage
			.from("images")
			.upload(file.name, file);
		setImage(file.name);
	  setLoading(true);
		if (error) {
			throw error;
		}
	}

	async function AddContent(e) {
		try {
			const content = {
				title: title,
				description: description,
				url: url,
				image: image,
			};
      console.log(content)

			let { error } = await supabase
				.from("projects").insert(content);
        
			console.log(error);
			alert(error);
		} catch (error) {
			alert(error.message);
		}
	}

	return (
		<>
			<h1 className="dark:text-white text-bold my-4 text-2xl">Add Content</h1>
			<div className="bg-white-900 dark:bg-gray-800 p-10 rounded-lg shadow mx-auto border border-primary">
				<form onSubmit={AddContent}>
					<div className="mb-5">
						<label
							htmlFor="title"
							className="block mb-2 font-bold text-gray-600 dark:text-primary"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							onChange={(e) => setTitle(e.target.value)}
							className="border border-primary shadow p-3 w-full rounded mb-"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="description"
							className="block mb-2 font-bold text-gray-600 dark:text-primary"
						>
							Description
						</label>
						<input
							type="text"
							id="description"
							name="description"
							onChange={(e) => setDescription(e.target.value)}
							className="border border-primary shadow p-3 w-full rounded mb-"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="url"
							className="block mb-2 font-bold text-gray-600 dark:text-primary"
						>
							URL
						</label>
						<input
							type="text"
							id="url"
							name="url"
							onChange={(e) => setUrl(e.target.value)}
							className="border border-primary shadow p-3 w-full rounded mb-"
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="image"
							className="block mb-2 font-bold text-gray-600 dark:text-primary"
						>
							Image
						</label>
						<input
							type="file"
							accept="image/png, image/jpeg"
							onChange={(e) => uploadImage(e)}
							id="image"
							name="image"
							className="border border-primary shadow p-3 w-full rounded mb-"
						/>
					</div>
          {/* {loading ?  : ''} */}
					<button className="bg-primary text-white font-bold py-4 px-10 rounded-lg">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default Create;
