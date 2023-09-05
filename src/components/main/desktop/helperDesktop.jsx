"use client"
import Image from "next/image";
import usePressedArrowKeys from "@/hooks/usePressedArrowKeys";

const HelperDesktop = () => {
  const {pressLeftArrow, pressUpArrow, pressDownArrow, pressRightArrow, pressEnterKey} = usePressedArrowKeys()

	return (
		<article className="no-drag bg-darkPurple w-11/12 h-12 flex flex-row justify-center items-center opacity-50 sm:text-xl xl:text-3xl mr-2">
      <span className="mr-2">Psst! Use</span>
			<div className="flex flex-row gap-2 mr-2">
        <Image src={"/navbar/ArrowLeft.png"} width={35} height={35} alt="ArrowLeft" className={`no-drag ${pressLeftArrow}`} />
        <Image src={"/navbar/ArrowUp.png"} width={35} height={35} alt="ArrowUp" className={`no-drag ${pressUpArrow}`} />
        <Image src={"/navbar/ArrowDown.png"} width={35} height={35} alt="ArrowDown" className={`no-drag ${pressDownArrow}`} />
        <Image src={"/navbar/ArrowRight.png"} width={35} height={35} alt="ArrowRight" className={`no-drag ${pressRightArrow}`} />
      </div>
      <span className="mr-2">to move between the menus, and</span>
      <Image src={"/navbar/EnterKey.png"} width={80} height={35} alt="EnterKey" className={`no-drag mr-2 ${pressEnterKey}`}/>
      <span>to select.</span>
		</article>
	);
};
export default HelperDesktop;
