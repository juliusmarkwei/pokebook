import Image from "next/image";
import Pokemon from "@/public/pokemon-3.svg";
import localFont from "next/font/local";
import Link from "next/link";

const clashDisplayVariable = localFont({
	src: "../fonts/ClashDisplay-Variable.woff",
});

export default function Home() {
	return (
		<main className="bg-white h-dvh w-[100%] flex flex-col items-center">
			<Image
				src={Pokemon}
				alt="pokemon"
				width={382.51}
				height={248.25}
				className="mt-[50px]"
			/>

			<div className="mt-5 flex flex-col items-center">
				<h1
					className={`text-[48px] text-black font-[600] leading-[59.04px] ${clashDisplayVariable.className}`}
				>
					Poké<span className="text-[#DE527F] ml-2">book</span>
				</h1>
				<p className="text-black leading-[24.3px]">
					Largest Pokémon index with information <br /> about
					every Pokemon you can think of.
				</p>
			</div>
			<div className="flex flex-row items-center border-[10px] rounded-[60px] border-[#DE527F] w-[515px] h-[81px] text-[24px] py-[8px] pl-[20px] pr-[9px] mt-[40px]">
				<input
					type="text"
					placeholder="Enter pokemon name"
					className="flex-grow focus:outline-none text-[#7B7B7B] text-[24px] bg-transparent w-[100%] h-[100%]"
				/>
				<Link
					href="/pokemon"
					className="h-[48px] w-[48px] p-[14px] bg-[#DE527F] rounded-[50%]"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="size-6 text-white cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
						/>
					</svg>
				</Link>
			</div>

			<Link href="/pokemon" className="underline text-black mt-3">
				View all
			</Link>
		</main>
	);
}
