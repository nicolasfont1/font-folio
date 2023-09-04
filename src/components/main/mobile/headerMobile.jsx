import Image from "next/image"

const HeaderMobile = () => {
  return (
    <article className="bg-darkPurple/50 w-11/12 h-32 rounded-full flex flex-row mt-2">
      <div className="bg-darkPurple w-32 h-full rounded-full relative">
        <Image
          src={"/various/Me.png"}
          width={80}
          height={80}
          alt="LiterallyMe"
          className="absolute left-6 top-4"
        />
      </div>
      <div className="flex flex-col h-full justify-center ml-3">
        <span className="text-3xl h-6 flex items-center ml-1">Nicolás</span>
        <span className="text-7xl h-12 flex items-center">Font</span>
        <span className="text-2xl h-6 flex items-center ml-1 mt-1 text-lightBlue">Full Stack Dev</span>
      </div>
    </article>
  )
}
export default HeaderMobile