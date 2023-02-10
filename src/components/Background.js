import React from "react";

const Background = ({ children }) => {
	return (
		<div className="dark:bg-gray-900 transition-all lg:px-32 lg:pt-12">
			<div className="container mx-auto">
					{children}
			</div>
		</div>
	);
};

export default Background;
