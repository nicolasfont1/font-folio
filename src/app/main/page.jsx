import MainHeaderMobile from "@/components/main/mainHeaderMobile"

const MainPage = () => {
  return (
    <main className="bg-darkPurple h-screen-mobile w-full text-white flex items-center justify-center">
      <section className="bg-purple w-11/12 h-[95%] rounded-xl flex flex-col justify-evenly items-center md:w-10/12">
        <MainHeaderMobile />
      </section>
    </main>
  )
}
export default MainPage