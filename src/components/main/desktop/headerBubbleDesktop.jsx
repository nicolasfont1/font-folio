const HeaderBubbleDesktop = () => {
	return (
		<article className="w-11/12 h-36 flex flex-row justify-end ml-4">
			<div className="w-[6%] flex flex-col items-end relative">
				<div className="w-10 h-2 mt-8 bg-black"></div>
				<div className="w-8 h-2 bg-white/80 border-black border-l-8">
					<div className="w-2 h-2 bg-white/90 absolute -right-2"></div>
				</div>
				<div className="w-6 h-2 bg-white/80 border-black border-l-8">
					<div className="w-2 h-2 bg-white/90 absolute -right-2"></div>
				</div>
				<div className="w-4 h-2 bg-white/80 border-black border-l-8">
					<div className="w-2 h-2 bg-white/90 absolute -right-2"></div>
				</div>
				<div className="w-2 h-2 bg-white/80 border-black border-l-8">
					<div className="w-2 h-2 bg-white/90 absolute -right-2"></div>
				</div>
			</div>
			<div className="w-[94%] h-full bg-white/80 border-black border-8 text-black px-2 text-3xl">
				<p className="leading-none">Welcome to my <span className="text-lightPurple">Font</span>-folio!</p>
        <p className="leading-none mt-[2px]">Yes, <span className="text-lightPurple">FONT</span> is my last name, so <span className="text-lightPurple">Font</span>-folio is a word play...</p>
        <p className="leading-none mt-[2px]">What you want to do <span className="text-lightPurple">next</span>?</p>
			</div>
		</article>
	);
};
export default HeaderBubbleDesktop;
