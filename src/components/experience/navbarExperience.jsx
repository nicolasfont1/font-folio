"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavbarExperience = () => {
	const [pressLeftArrow, setPressLeftArrow] = useState("");
	const [pressRightArrow, setPressRightArrow] = useState("");

	const handleArrowKeys = (event) => {
		if (event.type === "keydown" && event.key === "ArrowLeft") {
			setPressLeftArrow("translate-y-1");
		} else if (event.type === "keyup" && event.key === "ArrowLeft") {
			setPressLeftArrow("");
		}
		if (event.type === "keydown" && event.key === "ArrowRight") {
			setPressRightArrow("translate-y-1");
		} else if (event.type === "keyup" && event.key === "ArrowRight") {
			setPressRightArrow("");
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleArrowKeys);
		window.addEventListener("keyup", handleArrowKeys);
		return () => {
			window.removeEventListener("keydown", handleArrowKeys);
			window.removeEventListener("keyup", handleArrowKeys);
		};
	}, []);

	return (
		<div className="w-4/5 bg-lightPurple flex flex-row justify-evenly items-center p-2 rounded-lg md:w-1/3">
			<button
				className={`${pressLeftArrow} active:translate-y-1 w-[50px] h-[50px] bg-cover`}
        style={{ backgroundImage: "url(/navbar/ArrowLeft.png)" }}>  
      </button>
			<Image src={"/navbar/paginationDotTrue.png"} width={23} height={23} alt="dotTrue" />
			<Image src={"/navbar/paginationDotFalse.png"} width={23} height={23} alt="dotFalse" />
			<Image src={"/navbar/paginationDotFalse.png"} width={23} height={23} alt="dotFalse" />
			<button
				className={`${pressRightArrow} active:translate-y-1 w-[50px] h-[50px] bg-cover`}
        style={{ backgroundImage: "url(/navbar/ArrowRight.png)" }}>
      </button>
		</div>
	);
};
export default NavbarExperience;
