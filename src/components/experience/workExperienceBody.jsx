"use-client;"
import Image from "next/image";
import { useEffect, useState } from "react";

const WorkExperienceBody = () => {
	const [toggle, setToggle] = useState(false)

	const handleScroll = (event) => {
		if (event.key === "ArrowUp") {
			scrollableBody.scrollTop -= 1
		} else if (event.key === "ArrowDown") {
			scrollableBody.scrollTop += 1
		}
	}

	useEffect(() => {
		const scrollableBody = document.getElementById("scrollableBody")
		scrollableBody.addEventListener("keydown", handleScroll)
	
		scrollableBody.setAttribute("tabindex", "0")
		scrollableBody.focus()

		return scrollableBody.removeEventListener("keydown", handleScroll)
	}, [])

	return (
		<section className="bg-darkPurple w-11/12 h-3/4 rounded-lg justify-center items-center flex flex-col md:h-2/3">
			<article className="w-full h-[40%] flex flex-row justify-center items-center md:h-1/2">
				<a href="https://huntek.vercel.app/" target="_blank" className="bg-white w-40 h-40 border-black border-8 border-double relative opacity-90 md:w-48 md:h-48">
					<Image src={"/logos/LogoHuntek.jpeg"} alt="LogoHuntek" layout="fill"/>
				</a>
				<article className="flex flex-col w-2/5 ml-2 justify-center md:w-fit hover:cursor-default">
					<div className="">
						<span className="text-5xl h-10 md:text-8xl">Front</span> <span className="text-6xl h-12 md:text-8xl">End</span>
					</div>
					<span className="text-3xl pl-1 md:text-5xl">Developer</span>
					<span className="text-2xl pl-1">2023</span>
				</article>
				<div className="w-24 h-10 relative hidden md:flex justify-center">
					<a href="https://huntek.vercel.app/" target="_blank">
						<Image src={"/various/LogoLink.png"} alt="LogoLink" width={40} height={40} className=" hover:scale-110 transition-all" onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} />
					</a>
					{
						toggle && <span className="absolute w-28 left-20 top-1 text-xl">Go to webpage!</span>
					}
				</div>
			</article>
			<article className="w-full h-[60%] px-4 flex items-center justify-center md:h-1/2">
				<div id="scrollableBody" className="bg-white opacity-90 border-black border-8 border-double h-[93%] w-full mt-2 overflow-y-scroll md:h-[90%] md:mt-0 hover:cursor-default">
					<p className="text-black text-xl px-2 mb-3 md:text-3xl">
						Huntek is a startup that offers a <span className="text-lightPurple">Tinder-like</span> application, with
						the objective of <span className="text-lightPurple">connect candidates</span> with{" "}
						<span className="text-lightPurple">enterprises</span> using an algorithm of{" "}
						<span className="text-lightPurple">affinity</span> between both.
					</p>
					<p className="text-black text-xl px-2 mb-3 md:text-3xl">
						Front End develop of the app, with user auth using tokens, completable profile with file upload, admin
						dashboard, notifications, user roles and a in-app chat.
					</p>
					<p className="text-black text-xl px-2 mb-1 md:text-3xl">
						<span className="text-lightPurple">Tech stack:</span> JavaScript, React, Redux, Next.js, Tailwind CSS and
						PostgreSQL.
					</p>
				</div>
			</article>
		</section>
	);
};
export default WorkExperienceBody;
