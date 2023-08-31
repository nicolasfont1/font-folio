import Image from "next/image"

const MainHeader = () => {
  return (
    <article className="bg-darkPurple/50 w-11/12 h-32 rounded-full flex flex-row">
      <div className="bg-darkPurple w-32 h-full rounded-full">
        <Image
          src={"/various/Me.png"}
          width={50}
          height={50}
          alt="LiterallyMe"
        />
      </div>
    </article>
  )
}
export default MainHeader