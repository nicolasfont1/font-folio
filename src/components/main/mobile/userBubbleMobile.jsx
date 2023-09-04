"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OptionSelectedArrow from "../optionSelectedArrow";

const UserBubbleMobile = () => {
	const router = useRouter();

	const [paths, setPaths] = useState({
		experience: false,
		projects: false,
		about: false,
		play: false,
	});

	const handlePaths = (path) => {
		switch (path) {
      case "experience":
        if (paths.experience) {
          return router.push("/experience")
        } else {
          return setPaths({ experience: true, projects: false, about: false, play: false });
        }
			case "projects":
        if (paths.projects) {
          return router.push("/experience")
        } else {
          return setPaths({ experience: false, projects: true, about: false, play: false });
        }

			case "about":
        if (paths.about) {
          return router.push("/experience")
        } else {
          return setPaths({ experience: false, projects: false, about: true, play: false });
        }

			case "play":
        if (paths.play) {
          return router.push("/experience")
        } else {
          return setPaths({ experience: false, projects: false, about: false, play: true });
        }

			default:
				return setPaths({ experience: false, projects: false, about: false, play: false })
		}
	};

	return (
		<article className="w-5/6 h-[200px] bg-white/80 border-black border-8 border-double mb-2 text-black text-2xl" tabIndex={0} onBlur={() => handlePaths()}>
			<div
				className={`w-full min-h-[32px] h-fit flex justify-end mb-2 text-left ${paths.experience ? "" : "opacity-40"}`}
				onClick={() => handlePaths("experience")}>
				{paths.experience && <OptionSelectedArrow />}
				<p className="w-[255px]">Let me see your <span className="text-lightPurple">experience</span></p>
			</div>
			<div
				className={`w-full min-h-[32px] h-fit flex justify-end mb-2 text-left ${paths.projects ? "" : "opacity-40"}`}
				onClick={() => handlePaths("projects")}>
				{paths.projects && <OptionSelectedArrow />}
				<p className="w-[255px] leading-none">Show me what <span className="text-lightPurple">projects</span> you've got!</p>
			</div>
			<div
				className={`w-full min-h-[32px] h-fit flex justify-end mb-2 text-left ${paths.about ? "" : "opacity-40"}`}
				onClick={() => handlePaths("about")}>
				{paths.about && <OptionSelectedArrow />}
				<p className="w-[255px] leading-none">Tell me more <span className="text-lightPurple">about</span> yourself</p>
			</div>
			<div
				className={`w-full min-h-[32px] h-fit flex justify-end mb-2 text-left ${paths.play ? "" : "opacity-40"}`}
				onClick={() => handlePaths("play")}>
				{paths.play && <OptionSelectedArrow />}
				<p className="w-[255px]">I want to play a <span className="text-lightPurple">game</span></p>
			</div>
		</article>
	);
};
export default UserBubbleMobile;
