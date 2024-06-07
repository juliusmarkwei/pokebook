import Image from "next/image";
import Pokemon from "@/public/pokemon-3.svg";
import localFont from "next/font/local";

const clashDisplayVariable = localFont({
	src: "../fonts/ClashDisplay-Variable.woff",
});

export default function Home() {
	return (
		<main className="bg-white h-dvh w-[100%] flex flex-col items-center">
			<Image
				src={Pokemon}
				alt="pokemon"
				width={0}
				height={0}
				className="w-[382.51px] h-[248.25px] mt-[50px]"
			/>

			<div
				className={`mt-5 text-[${clashDisplayVariable.className}] flex flex-col items-center`}
			>
				<h1 className="text-[48px] text-black font-[600px] leading-[59.04px]">
					Poke <span className="text-[#DE527F]">book</span>
				</h1>
				<p className="text-black font-[400px] leading-[24.3px] text-[18px]">
					Largest Pokémon index with information <br /> about
					every Pokemon you can think of.
				</p>
			</div>

			<input
				type="text"
				placeholder="Enter pokemon name"
				className="text-gray-500 border-4 rounded-[60px] border-[#DE527F] w-[515px] h-[81px] font-[400px] text-[24px] py-[8px] pl-[20px] pr-[9px] mt-[40px]"
			/>
		</main>
	);
}
