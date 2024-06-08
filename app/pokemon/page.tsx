import React from "react";
import Image from "next/image";
import _Logo from "@/public/pokemon-3.svg";
import { clashDisplayVariable } from "../_shared/Constants";
import SearchBar from "../components/ListView/SearchBar";

const Pokemon = () => {
	return (
		<main className="bg-[#F6F6F6] h-dvh w-dvw">
			<nav className="h-[80px] bg-white relative flex flex-row">
				<Image
					src={_Logo}
					alt="pokemon"
					width={129.43}
					height={84}
					className={`absolute top-[12px] left-[39px]`}
				/>
				<h1 className="text-black text-[24px] font-[600] absolute top-7 left-44 leading-[29.52px] h-[30] w-[120]">
					Poke
					<span
						className={`${clashDisplayVariable.className} text-[#E85382]`}
					>
						book
					</span>
				</h1>
				<SearchBar />
			</nav>
		</main>
	);
};

export default Pokemon;
