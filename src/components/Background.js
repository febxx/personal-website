import React from "react";

const Background = ({ children }) => {
	return (
		<div className="dark:bg-gray-900 min-h-screen transition-all lg:px-32 lg:p-12 px-6 p-4">
			<div className="container mx-auto">
					{children}
			</div>
		</div>
	);
};

export default Background;
