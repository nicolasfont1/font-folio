import Image from "next/image"
import HeaderBubbleDesktop from "./headerBubbleDesktop"

const HeaderDesktop = () => {
  return (
    <article className="bg-darkPurple/50 w-11/12 h-80 rounded-l-full rounded-r-[7000px] flex flex-row">
      <div className="bg-darkPurple w-[320px] h-full rounded-full relative">
      <Image
          src={"/various/Me.png"}
          width={200}
          height={200}
          alt="LiterallyMe"
          className="absolute left-14 top-9"
        />
      </div>
      <article className="w-[63%] flex flex-col justify-around">
        <div className="flex flex-col justify-center ml-9 leading-[80px] ">
          <span className="text-[110px] ml-1">Nicolás Font</span>
          <span className="text-6xl ml-1 text-lightBlue">Full Stack Developer</span>
        </div>
        <div>
          <HeaderBubbleDesktop />
        </div>
      </article>
    </article>
  )
}
export default HeaderDesktop