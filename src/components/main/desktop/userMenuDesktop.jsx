"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OptionSelectedArrow from "../optionSelectedArrow";
import Image from "next/image"

const UserMenuDesktop = () => {
  const router = useRouter();
  let [option, setOption] = useState(1)

  const [paths, setPaths] = useState({
		1: true,
		2: false,
		3: false,
		4: false,
  });
  
  const [contact, setContact] = useState({
    linkedin: false,
    github: false,
    email: false
  })

  let [menu, setMenu] = useState({
    portfolioPaths: true,
    contactPaths: false
  })

  const handlePressedArrowKeys = (event) => {
    if (menu.portfolioPaths) {
      if (event.key === "ArrowDown") {
        if (option < 4) {
          setOption(option += 1)
          setPaths({
            [option - 1]: false,
            [option]: true
          })
        }
      } else if (event.key === "ArrowUp") {
        if (option > 1) {
          setOption(option = option - 1)
          setPaths({
            [option + 1]: false,
            [option]: true
          })
        }
      } else if (event.key === "ArrowRight") {
        setPaths({1: false, 2: false, 3: false, 4: false})
        setMenu({ portfolioPaths: false, contactPaths: true })
        setContact({linkedin: true, github: false})
      }
    }
    if (menu.contactPaths) {
      if (event.key === "ArrowDown" && contact.linkedin) {
        setContact({linkedin: false, github: true, email: false})
      } else if (event.key === "ArrowDown" && contact.github) {
        setContact({linkedin: false, github: false, email: true})
      }
    }
  };

  useEffect(() => {
		window.addEventListener("keydown", handlePressedArrowKeys);
		return () => {
			window.removeEventListener("keydown", handlePressedArrowKeys);
		};
	}, []);


  return (
    <section className="w-4/5 h-48 flex flex-row justify-between no-drag">
      <article className={`w-9/12 h-full bg-white/80 border-black border-8 text-[42px] text-black leading-none justify-end ${menu.portfolioPaths ? "" : "opacity-40"}`}>
        <div className={`w-full flex text-left justify-end ${paths[1] ? "" : "opacity-40"}`}>
          {paths[1] && <OptionSelectedArrow />}
          <p className="w-11/12">Let me see your <span className="text-lightPurple">experience</span></p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths[2] ? "" : "opacity-40"}`}>
          {paths[2] && <OptionSelectedArrow />}
          <p className="w-11/12">Show me what <span className="text-lightPurple">projects</span> you've got!</p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths[3] ? "" : "opacity-40"}`}>
          {paths[3] && <OptionSelectedArrow />}
          <p className="w-11/12">Tell me more <span className="text-lightPurple">about</span> yourself</p>
        </div>
        <div className={`w-full flex text-left justify-end ${paths[4] ? "" : "opacity-40"}`}>
          {paths[4] && <OptionSelectedArrow />}
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