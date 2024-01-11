import React from "react";
import c from "/c.png";
import cplusplus from "/cplusplus.png";
import html from "/html.png";
import css from "/css.png";
import git from "/git.png";
import github from "/github.png";
import js from "/js.png";
import javascript from "/javascript.png";
import bootstrap from "/bootstrap.png";
import tailwind from "/tailwind.png";
import reactjs from "/reactjs.png";

function Skills() {
	const skills = [
		{
			name: "C",
			src: c,
		},
		{
			name: "C++",
			src: cplusplus,
		},
		{
			name: "HTML5",
			src: html,
		},
		{
			name: "CSS3",
			src: css,
		},
		{
			name: "Bootstrap",
			src: bootstrap,
		},
		{
			name: "Tailwind",
			src: tailwind,
		},
		{
			name: "Javascript",
			src: javascript,
		},
		{
			name: "React",
			src: reactjs,
		},
	];

	return (
		<div className="px-20 border">
			<p className="text-5xl text-white">Skills.</p>
			<div className="text-3xl border gap-8 text-white grid grid-cols-4">
				{skills.map((skill) => (
					<div className="flex flex-col items-center p-8 gap-8 bg-gray-700 h-40 w-40 rounded-md">
						<img
							className="max-w-24 max-h-12 scale-150"
							src={skill.src}
							alt=""
						/>
						<p>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
