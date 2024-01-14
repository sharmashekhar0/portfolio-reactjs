import React from "react";

function Hero() {
	const dynamicHeight = `calc(100vh - 64px)`;

	return (
		<div
			id="hero"
			style={{ height: dynamicHeight }}
			className={`text-[#F0E68C] p-20 w-screen`}
		>
			<div className="w-2/3 h-full text-7xl flex items-center justify-center">
				<div>
					<p>Hey!</p>
					<p>I'm</p>
					<p className="font-semibold">Shekhar</p>
					<p className="font-semibold">Sharma</p>
					<p className="">Full Stack Developer</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
