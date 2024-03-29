import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import linkedin from "/linkedin.svg";
import github from "/github.svg";
import { Link as LinkScroll } from "react-scroll";
import { IoMenu } from "react-icons/io5";

function Header() {
	const navigate = useNavigate();
	const [smallHeaderView, setSmallHeaderView] = useState(false);

	const navItems = [
		{
			name: "Home",
			url: "",
			scrollTo: "hero",
		},
		{
			name: "Skills",
			url: "skills",
			scrollTo: "skills",
		},
		{
			name: "Projects",
			url: "Projects",
			scrollTo: "projects",
		},
		{
			name: "About",
			url: "About",
			scrollTo: "about",
		},
		{
			name: "Contact",
			url: "Contact",
			scrollTo: "contact",
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
		<div className="flex items-center text-white justify-between sticky top-0 shadow-edCustom px-8 sm:px-20 h-16 bg-[#001429] z-10">
			{/* Logo Div */}
			<div className="py-2">
				<p className="text-[26px] md:text-[32px] lg:text-[40px] font-bold">
					<span className="text-[#FFD700]">S</span>hekhar{" "}
					<span className="text-[#FFD700]">S</span>harma
				</p>
			</div>

			{/* Nav Link */}
			<ul className={`hidden xl:flex gap-8 text-[20px] font-semibold`}>
				{navItems.map((nav) => (
					<li
						key={nav.name}
						className="hover:text-[#FFD700] cursor-pointer"
					>
						<NavLink
							to={nav.url}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-[#FFD700]"
									: ""
							}
						>
							<LinkScroll
								to={nav.scrollTo}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								{nav.name}
							</LinkScroll>
						</NavLink>
					</li>
				))}
			</ul>

			{/* Social Profile Link */}
			<ul className={`hidden xl:flex gap-8`}>
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
			<div className="text-3xl flex items-center justify-center xl:hidden">
				<button>
					<IoMenu
						onClick={() => setSmallHeaderView(!smallHeaderView)}
					/>
				</button>
			</div>
			<div
				className={`${
					smallHeaderView ? "" : "hidden"
				} absolute list-none top-10 sm:right-28 xl:hidden right-16 rounded-sm w-1/2 bg-[#001429] shadow-edCustom  animate-fade-left p-4`}
			>
				{navItems.map((nav) => (
					<li
						key={nav.name}
						className="hover:text-[#FFD700] cursor-pointer"
					>
						<NavLink
							to={nav.url}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? "text-[#FFD700]"
									: ""
							}
						>
							<LinkScroll
								to={nav.scrollTo}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								{nav.name}
							</LinkScroll>
						</NavLink>
					</li>
				))}
			</div>
		</div>
	);
}

export default Header;
