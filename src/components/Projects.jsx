import React from "react";

function Projects() {
	const projects = [
		{
			name: "75hard",
			image: "",
			techStack: "",
			url: "",
			githubLink: "",
		},
		{
			name: "Todo",
			image: "",
			techStack: "",
			url: "",
			githubLink: "",
		},
		{
			name: "Todo",
			image: "",
			techStack: "",
			url: "",
			githubLink: "",
		},
		{
			name: "Todo",
			image: "",
			techStack: "",
			url: "",
			githubLink: "",
		},
	];
	return (
		<div
			style={{ minHeight: `calc(100vh - 64px)` }}
			className="px-20 min-h-96 mb-40"
			id="projects"
		>
			<p className="text-5xl text-white">Projects.</p>
			<div className="min-h-96 py-4 grid grid-cols-2 gap-4 justify-between">
				{projects.map((project, index) => (
					<div
						key={index}
						className="text-white border h-96 rounded-md p-2"
					>
						<p>{project.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
