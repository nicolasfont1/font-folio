const MainHeaderBubbleMobile = () => {
	return (
		<article className="w-5/6 h-52 flex flex-col justify-end">
			<div className="w-full h-12 flex flex-col justify-end relative">
				<div className="w-4 h-2 border-black border-r-8 border-l-8 ml-6 bg-white/80"></div>
				<div className="w-6 h-2 border-black border-r-8 border-l-8 ml-6 bg-white/80"></div>
				<div className="w-8 h-2 border-black border-r-8 border-l-8 ml-6 bg-white/80"></div>
				<div className="w-10 h-2 border-black border-r-8 border-l-8 ml-6 bg-white/80"></div>
        <div className="w-12 h-2 border-black border-r-8 border-l-8 ml-6 bg-white/80"></div>
        <div className="w-10 h-2 bg-white/90 ml-8 absolute -bottom-2"></div>
			</div>
      <div className="w-full h-40 bg-white/80 border-black border-8 text-black px-2 text-2xl">
        <p className="leading-none mt-1">Welcome to my <span className="text-lightPurple">Font</span>-folio!</p>
        <p className="leading-none mt-2">Yes, <span className="text-lightPurple">FONT</span> is my last name, so <span className="text-lightPurple">Font</span>-folio is a word play...</p>
        <p className="leading-none mt-2">What you want to do <span className="text-lightPurple">next</span>?</p>
      </div>
		</article>
	);
};
export default MainHeaderBubbleMobile;
