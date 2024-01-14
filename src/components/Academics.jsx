import React from "react";

function Academics() {
	const academics = [
		{
			instituteName: "Kamla Nehru Institute of Technology",
			course: "Master of Computer Application",
			duration: "Nov 2021 - May 2023",
			address: "Sultanpur, India",
		},
		{
			instituteName: "Swami Sukhdevanand Post Graduate College",
			course: "Bachelor of Computer Application",
			duration: "Aug 2017 - Nov 2020",
			address: "Shahjahanpur, India",
		},
		{
			instituteName: "B S Public School",
			course: "Intermediate",
			duration: "May 2015 - April 2017",
			address: "Shahjahanpur, India",
		},
		{
			instituteName: "B S Public School",
			course: "High School",
			duration: "May 2013 - April 2015",
			address: "Shahjahanpur, India",
		},
	];

	return (
		<div
			style={{ minHeight: `calc(100vh - 64px)` }}
			className="min-h-96 px-20 mb-40"
			id="academics"
		>
			<p className="text-5xl text-white">Academics.</p>
			<div className="text-white text-2xl flex flex-col gap-4 py-8">
				{academics.map((academic) => (
					<div
						key={academic.course}
						className="flex items-center justify-between bg-[#0C2340] h-24 shadow-edCustom bg-opacity-40 px-12 rounded-md"
					>
						<div className="flex flex-col justify-between h-2/3">
							<p className="text-3xl text-[#FFC72C] font-semibold">
								{academic.instituteName}
							</p>
							<p className="italic">{academic.course}</p>
						</div>
						<div className="flex flex-col items-end h-2/3 justify-between">
							<p>{academic.address}</p>
							<p>{academic.duration}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Academics;
