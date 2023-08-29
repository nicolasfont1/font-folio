const WorkExperienceBody = () => {
	return (
		<section className="bg-darkPurple w-11/12 h-3/4 rounded-lg justify-center items-center flex flex-col md:h-2/3">
			<article className="w-full h-1/3 flex flex-row justify-evenly items-center mt-2">
				<div
					className="bg-white w-1/2 h-[155px] bg-cover opacity-90 border-black border-4 ml-1 md:w-2/5"
					style={{ backgroundImage: "url(logos/LogoHuntek.jpeg)" }}></div>
				<div className="flex flex-col w-2/5 leading-none">
					<span className="text-5xl h-10">Front</span> <span className="text-6xl h-12">End</span>
					<span className="text-3xl pl-1">Developer</span>
					<span className="text-2xl pl-1">2023</span>
				</div>
			</article>
			<article className="w-11/12 h-2/3 flex items-start justify-center">
				<div className="bg-white opacity-90 border-black border-4 h-[93%] w-full mt-2 overflow-y-scroll">
					<p className="text-black text-xl px-2 mb-3">
						Huntek is a startup that offers a <span className="text-lightPurple">Tinder-like</span> application, with the objective of <span className="text-lightPurple">connect candidates</span> with <span className="text-lightPurple">enterprises</span> using an algorithm of <span className="text-lightPurple">affinity</span> between both.
          </p>
					<p className="text-black text-xl px-2 mb-3">
						Front End develop of the app, with user auth using tokens, completable profile with file upload, admin
						dashboard, notifications, user roles and a in-app chat.
          </p>
					<p className="text-black text-xl px-2 mb-1"><span className="text-lightPurple">Tech stack:</span> JavaScript, React, Redux, Next.js, Tailwind CSS and PostgreSQL.</p>
				</div>
			</article>
		</section>
	);
};
export default WorkExperienceBody;
