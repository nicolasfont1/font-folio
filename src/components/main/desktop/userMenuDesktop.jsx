"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OptionSelectedArrow from "../optionSelectedArrow";
import Image from "next/image"

const UserMenuDesktop = () => {
  const router = useRouter();

  // const [pressUpArrow, setPressUpArrow] = useState("");
  // const [pressDownArrow, setPressDownArrow] = useState("");
  // const [pressLeftArrow, setPressLeftArrow] = useState("");
	// const [pressRightArrow, setPressRightArrow] = useState("");

  // const handlePressedArrowKeys = (event) => {
	// 	if (event.type === "keydown" && event.key === "ArrowLeft") {
	// 		setPressLeftArrow("translate-y-1");
	// 	} else if (event.type === "keyup" && event.key === "ArrowLeft") {
	// 		setPressLeftArrow("");
	// 	}
	// 	if (event.type === "keydown" && event.key === "ArrowRight") {
	// 		setPressRightArrow("translate-y-1");
	// 	} else if (event.type === "keyup" && event.key === "ArrowRight") {
	// 		setPressRightArrow("");
	// 	}
  // };
  
  const [paths, setPaths] = useState({
		experience: true,
		projects: false,
		about: false,
		play: false,
  });
  
  const [contact, setContact] = useState({
    linkedin: false,
    github: false,
    email: false
  })

  const [menu, setMenu] = useState({
    portfolioPaths: true,
    contactPaths: false
  })

  // useEffect(() => {
	// 	window.addEventListener("keydown", handlePressedArrowKeys);
	// 	window.addEventListener("keyup", handlePressedArrowKeys);
	// 	return () => {
	// 		window.removeEventListener("keydown", handlePressedArrowKeys);
	// 		window.removeEventListener("keyup", handlePressedArrowKeys);
	// 	};
	// }, []);


  return (
    <section className="w-4/5 h-48 flex flex-row justify-between no-drag">
      <article className={`w-9/12 h-full bg-white/80 border-black border-8 text-[42px] text-black leading-none justify-end ${menu.portfolioPaths ? "" : "opacity-40"}`}>
        <div className={`w-full flex text-left justify-end ${paths.experience ? "" : "opacity-40"}`}>
          {paths.experience && <OptionSelectedArrow />}
          <p className="w-11/12">Let me see your <span className="text-lightPurple">experience</span></p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths.projects ? "" : "opacity-40"}`}>
          {paths.projects && <OptionSelectedArrow />}
          <p className="w-11/12">Show me what <span className="text-lightPurple">projects</span> you've got!</p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths.about ? "" : "opacity-40"}`}>
          {paths.about && <OptionSelectedArrow />}
          <p className="w-11/12">Tell me more <span className="text-lightPurple">about</span> yourself</p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths.play ? "" : "opacity-40"}`}>
          {paths.play && <OptionSelectedArrow />}
          <p className="w-11/12">I want to play a <span className="text-lightPurple">game</span></p>
        </div>
      </article>
      <article className={`w-1/5 h-full bg-white/80 border-black border-8 text-black text-center ${menu.contactPaths ? "" : "opacity-40"}`}>
        <p className="text-3xl mt-1">Contact me!</p>
        <div className="flex flex-row justify-evenly mt-2">
          <Image src={"/logos/LogoLinkedin.png"} width={45} height={45} alt="LogoLinkedin" className={`no-drag ${contact.linkedin ? "" : "opacity-40"}`} />
          <Image src={"/logos/LogoGitHub.png"} width={45} height={45} alt="LogoGitHub" className={`no-drag ${contact.github ? "" : "opacity-40"}`} />
        </div>
        <p className="text-2xl mt-2">or</p>
        <a className={`text-3xl underline ${contact.email ? "" : "opacity-40"}`}>send email</a>
      </article>
    </section>
  )
}
export default UserMenuDesktop