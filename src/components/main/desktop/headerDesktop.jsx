import Image from "next/image"

const HeaderDesktop = () => {
  return (
    <article className="bg-darkPurple/50 w-11/12 h-80 rounded-full flex flex-row">
      <div className="bg-darkPurple w-[320px] h-full rounded-full relative">
      <Image
          src={"/various/Me.png"}
          width={200}
          height={200}
          alt="LiterallyMe"
          className="absolute left-14 top-9"
        />
      </div>
      <article className="flex flex-col">
        <div className="flex flex-col h-1/2 justify-center ml-3 leading-none">
          <span className="text-[120px] ml-1">Nicolás Font</span>
          <span className="text-6xl ml-1 mt-1 text-lightBlue">Full Stack Developer</span>
        </div>
        <div>
          Acá iria la otra bubble
        </div>
      </article>
    </article>
  )
}
export default HeaderDesktop