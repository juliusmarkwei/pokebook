"use client";

import Image from "next/image";
import _Logo from "@/public/pokemon-3.svg";
import { clashDisplayVariable } from "../_shared/Constants";
import SearchBar from "../components/ListView/SearchBar";
import ThemeButton from "../components/ListView/ThemeButton";
import PokemonList from "../components/ListView/PokemonList";
import Pagination from "../components/ListView/Pagination";
import { useAppContext } from "../_context/pokemonContext";
import { useEffect } from "react";
import PageSizeSelector from "../components/ListView/PageSizeSelector";

const Pokemon = () => {
	// const { _pokemonData } = useAppContext();
	// console.log(_pokemonData.slice(0, 2));

	return (
		<main className="bg-[#F6F6F6] h-dvh w-dvw">
			<nav className="h-[75px] bg-white flex flex-row items-center">
				<Image
					src={_Logo}
					alt="pokemon"
					width={129.43}
					height={84}
					className={`absolute top-[12px] left-[39px]`}
				/>
				<h1 className="text-black text-[24px] font-[600] relative left-44 leading-[29.52px] h-[30] w-[120]">
					Poke
					<span
						className={`${clashDisplayVariable.className} text-[#E85382]`}
					>
						book
					</span>
				</h1>
				<div className="border rounded-[30px] border-[#E1E1E1] h-[48px] w-[30%] pt-[12px] pr-[32px] pb-[12px] pl-[20px] ml-[30%] flex flex-row gap-3">
					<SearchBar />
				</div>
				<div className="border w-[35px] h-[35px] rounded-[50px] border-[#868686] cursor-pointer ml-[25%] flex flex-col justify-center items-center">
					<ThemeButton />
				</div>
			</nav>

			<section className="flex flex-col items-center justify-center gap-8">
				<PokemonList />
				<div className="flex flex-row items-center w-[85%]">
					<span className="flex-grow">
						<Pagination />
					</span>
					<PageSizeSelector />
				</div>
			</section>
		</main>
	);
};

export default Pokemon;
