"use client";

import useGetScreenSize from "@/hooks/useGetScreenSize";

import HeaderMobile from "@/components/main/mobile/headerMobile";
import HeaderBubbleMobile from "@/components/main/mobile/headerBubbleMobile";
import HelperMobile from "@/components/main/mobile/helperMobile";
import UserBubbleMobile from "@/components/main/mobile/userBubbleMobile";

import HeaderDesktop from "@/components/main/desktop/headerDesktop";
import HelperDesktop from "@/components/main/desktop/helperDesktop";
import UserMenuDesktop from "@/components/main/desktop/userMenuDesktop";

const MainPage = () => {
	const { width } = useGetScreenSize();

	return (
		<main className="bg-darkPurple h-screen-mobile w-full text-white flex items-center justify-center">
			{width ? width < 768 ? (
				<section className="bg-purple w-11/12 h-[95%] rounded-xl flex flex-col justify-evenly items-center md:w-10/12">
					<HeaderMobile />
					<HeaderBubbleMobile />
					<HelperMobile />
					<UserBubbleMobile />
				</section>
			) : (
				<section className="bg-purple w-11/12 h-[95%] rounded-xl flex flex-col justify-evenly items-center md:w-10/12">
					<HeaderDesktop />
					<HelperDesktop />
					<UserMenuDesktop />
				</section>
			) : <div className="text-3xl">LOADING...</div>}
		</main>
	);
};
export default MainPage;
