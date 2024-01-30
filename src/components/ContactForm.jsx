import React from "react";

function ContactForm() {
	return (
		<div id="contact" className="w-full sm:w-1/2 px-4 sm:px-20">
			<p className="text-4xl text-white">Contact Form.</p>

			<div className="flex flex-col gap-4 px-10 py-4 text-xl">
				<input
					className="outline-none p-2 px-4 text-white h-12 rounded bg-slate-800"
					type="text"
					placeholder="Enter Full Name"
				/>
				<input
					className="outline-none p-2 px-4 text-white h-12 rounded bg-slate-800"
					type="email"
					placeholder="Enter Your Email"
				/>
				<textarea
					className="outline-none p-2 px-4 text-white rounded bg-slate-800 resize-none"
					id=""
					cols="20"
					rows="8"
					placeholder="Your Message"
				></textarea>
				<button className="bg-blue-700 text-white h-10 rounded">
					Send Message
				</button>
			</div>
		</div>
	);
}

export default ContactForm;
