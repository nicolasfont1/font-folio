"use client";
import WorkExperienceHeader from "@/components/experience/workExperienceHeader";
import WorkExperienceBody from "@/components/experience/workExperienceBody";
import NavbarExperience from "@/components/experience/navbarExperience";

const ExperiencePage = () => {
	return (
		<main className="bg-darkPurple h-screen-mobile w-full text-white flex items-center justify-center">
      <section className="bg-purple w-11/12 h-[95%] rounded-xl flex flex-col justify-evenly items-center md:w-10/12">
        <WorkExperienceHeader />
        <WorkExperienceBody />
        <NavbarExperience />
      </section>
		</main>
	);
};
export default ExperiencePage;
