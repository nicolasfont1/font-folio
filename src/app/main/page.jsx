import HeaderMobile from "@/components/main/mobile/headerMobile"
import HeaderBubbleMobile from "@/components/main/mobile/headerBubbleMobile"
import MainHelperMobile from "@/components/main/mobile/mainHelperMobile"
import MainUserBubbleMobile from "@/components/main/mobile/mainUserBubbleMobile"

const MainPage = () => {
  return (
    <main className="bg-darkPurple h-screen-mobile w-full text-white flex items-center justify-center">
      <section className="bg-purple w-11/12 h-[95%] rounded-xl flex flex-col justify-evenly items-center md:w-10/12">
        <HeaderMobile />
        <HeaderBubbleMobile />
        <MainHelperMobile />
        <MainUserBubbleMobile />
      </section>
    </main>
  )
}
export default MainPage