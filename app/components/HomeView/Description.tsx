import { clashDisplayVariable } from "@/app/_shared/Constants";

const HomeViewDescription = () => {
	return (
		<>
			<h1
				className={`text-[48px] text-black font-[600] leading-[59.04px] ${clashDisplayVariable.className}`}
			>
				Poké<span className="text-[#DE527F] ml-2">book</span>
			</h1>
			<p className="text-black leading-[24.3px]">
				Largest Pokémon index with information <br /> about every
				Pokemon you can think of.
			</p>
		</>
	);
};

export default HomeViewDescription;
