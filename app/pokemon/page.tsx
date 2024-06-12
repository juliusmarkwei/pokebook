"use client";

import TopBar from "../components/ListView/TopBar";
import PokemonList from "../components/ListView/PokemonList";
import Pagination from "../components/ListView/Pagination";
import { useAppContext } from "../_context/pokemonContext";
import { useEffect } from "react";
import PageSizeSelector from "../components/ListView/PageSizeSelector";

const Pokemon = () => {
	// const { pokemonData, isLoading } = useAppContext();
	// isLoading ? console.log("Loading...") : console.log(pokemonData);

	return (
		<main className="bg-[#F6F6F6] w-[1440px] h-[1024px]">
			<TopBar />

			<section className="flex flex-col items-center justify-center gap-8 h-[70%]">
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
