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

const Pokemon = () => {
	const { _pokemonData } = useAppContext();
	// console.log(_pokemonData);

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
				<ThemeButton />

				<PokemonList />
				<Pagination />
			</nav>
		</main>
	);
};

export default Pokemon;
