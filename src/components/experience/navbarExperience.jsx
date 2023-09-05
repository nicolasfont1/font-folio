"use client";
import Image from "next/image";
import usePressedArrowKeys from "@/hooks/usePressedArrowKeys";

const NavbarExperience = () => {
	const {pressLeftArrow, pressRightArrow} = usePressedArrowKeys()

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
