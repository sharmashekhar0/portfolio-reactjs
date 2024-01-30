import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

function About() {
	return (
		<div
			className="mb-40 min-h-96 px-4 sm:px-20 flex flex-col gap-4"
			id="about"
		>
			<p className="text-4xl text-white">About Me.</p>
			<div className="flex flex-col sm:flex-row sm:h-[400px] gap-4 text-xl sm:text-2xl bg-slate-900 rounded shadow-edCustom sm:px-4">
				<img
					src="https://lawschoolpolicyreview.files.wordpress.com/2018/06/passport-size-photo-2-e1558013566564.jpg"
					alt="Pic"
					className="h-[320px] mx-auto sm:h-[360px] shadow-edCustom my-2 sm:m-4 rounded-sm"
				/>
				<div className="p-4 flex flex-col justify-center">
					<p className="text-white text-justify">
						Hello! I'm Shekhar Sharma, a passionate coder with
						expertise in Data Structures, Algorithms, and Front-End
						Development. I'm currently focused on mastering backend
						technologies to create comprehensive, end-to-end
						solutions. My journey is fueled by a love for coding and
						a commitment to continuous growth.
					</p>
					<div className="flex flex-col gap-4 py-4 text-white">
						<p className="flex gap-2 sm:gap-4 items-center">
							<CgMail className="text-xl" />
							<span>Beingperfect76@gmail.com</span>
						</p>
						<p className="flex gap-2 sm:gap-4 items-center">
							<IoLocationSharp className="text-xl" />
							Uttar Pradesh, India
						</p>
						<p className="p-2 cursor-pointer hover:bg-[#150030] rounded-sm text-center font-semibold bg-[#1b003e] shadow-edCustom w-full sm:w-1/3">
							My Resume
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
