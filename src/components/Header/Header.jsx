import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import linkedin from "../../../public/linkedin.svg";
import github from "../../../public/github.svg";

function Header() {
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Skills",
			url: "/skills",
		},
		{
			name: "Projects",
			url: "/Projects",
		},
		{
			name: "About",
			url: "/About",
		},
		{
			name: "Contact",
			url: "/Contact",
		},
	];

	const socialLinks = [
		{
			name: "LinkedIn",
			src: linkedin,
			link: "https://www.linkedin.com/in/beingperfect/",
		},
		{
			name: "github",
			src: github,
			link: "https://github.com/sharmashekhar0",
		},
	];

	return (
		<div className="flex items-center text-white justify-between sticky top-0 shadow-xl px-20">
			{/* Logo Div */}
			<div className="py-2">
				<p className="text-[40px] font-bold">
					<span className="text-[#f5c400]">S</span>hekhar{" "}
					<span className="text-[#f5c400]">S</span>harma
				</p>
			</div>

			{/* Nav Link */}
			<ul className="flex gap-8 text-[20px] font-semibold">
				{navItems.map((nav) => (
					<li
						key={nav.name}
						className="hover:text-[#f5c400] cursor-pointer"
					>
						<NavLink
							to={nav.url}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-[#f5c400]"
									: ""
							}
						>
							{nav.name}
						</NavLink>
					</li>
				))}
			</ul>

			{/* Social Profile Link */}
			<ul className="flex gap-8">
				{socialLinks.map((social) => (
					<li
						key={social.name}
						className="cursor-pointer relative w-4 h-4"
					>
						<Link to={social.link} target="_blank">
							<img
								src={social.src}
								alt={social.name}
								className="absolute h-full w-full transition duration-300 transform hover:scale-[2] scale-[1.5]"
								style={{ fill: "currentcolor" }}
							/>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Header;
