import React from "react";
import rockpaperscissor from "/Rock_Paper_Scissor_Game.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import passwordGenerator from "/passwordGenerator.png";
import todosomething from "/todosomething.png";
import MegaBlog from "/MegaBlog.png";
import { Link } from "react-router-dom";

function Projects() {
	const projects = [
		{
			name: "ToDoSomething",
			image: todosomething,
			techStack: ["TailwindCSS", "ReactJS", "Redux-toolkit", "Appwrite"],
			url: "https://to-do-something.vercel.app/",
			githubLink: "https://github.com/sharmashekhar0/ToDoSomething",
		},
		{
			name: "MegaBlog",
			image: MegaBlog,
			techStack: ["TailwindCSS", "ReactJS", "Redux-toolkit", "Appwrite"],
			url: "https://my-mega-blog.vercel.app/",
			githubLink: "https://github.com/sharmashekhar0/MegaBlog",
		},
		{
			name: "Rock Paper Scissor Game",
			image: rockpaperscissor,
			techStack: ["HTML", "CSS", "Javascript"],
			url: "https://rock-paper-scissor-beta-game.vercel.app/",
			githubLink: "https://github.com/sharmashekhar0/Javascript-Projects",
		},

		{
			name: "Password Generator",
			image: passwordGenerator,
			techStack: ["TailwindCSS", "ReactJS"],
			url: "https://securepasswordgenerator.vercel.app/",
			githubLink: "https://github.com/sharmashekhar0/password-generator",
		},
	];

	return (
		<div
			style={{ minHeight: `calc(100vh - 64px)` }}
			className="px-4 sm:px-20 min-h-96 mb-40"
			id="projects"
		>
			<p className="text-5xl text-white">Projects.</p>
			<div className="min-h-96 py-4  grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
				{projects.map((project, index) => (
					<div
						key={index}
						className="text-white flex flex-col justify-between shadow-edCustom min-h-96 
						
						rounded-md p-4 bg-slate-900"
					>
						<div className="w-full flex items-center justify-between text-xl  sm:text-2xl">
							<p className="w-1/2 sm:text-nowrap cursor-pointer rounded-sm font-semibold sm:w-full text-[#FFD700]">
								{project.name}
							</p>
							<Link
								className="p-1 text-nowrap cursor-pointer shadow-edCustom hover:bg-[#150030] rounded-sm text-center font-semibold bg-[#001429] flex gap-2 px-4 items-center"
								target="_blank"
								to={project.githubLink}
							>
								<p className="text-lg">Github</p>
								<FaExternalLinkAlt className="text-lg" />
							</Link>
						</div>
						<Link
							target="_blank"
							to={project.url}
							className="relative flex items-center justify-center"
						>
							<FaExternalLinkAlt
								className="absolute  text-7xl opacity-50
							top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							/>
							<img
								src={project.image}
								className="my-4 rounded-sm"
								alt=""
							/>
						</Link>

						<div className="flex flex-col sm:flex-row gap-2">
							{project.techStack.map((tech) => {
								return (
									<p
										key={tech}
										className="shadow-edCustom p-2 text-nowrap cursor-pointer rounded-sm text-center font-semibold bg-[#001429]  w-full"
									>
										{tech}
									</p>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
