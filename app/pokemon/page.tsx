"use client";

import TopBar from "../components/ListView/TopBar";
import PokemonList from "../components/ListView/PokemonList";
import Pagination from "../components/ListView/Pagination";
import PageSizeSelector from "../components/ListView/PageSizeSelector";

const Pokemon = () => {
	return (
		<main className="bg-[#F6F6F6] w-dvh h-[1024px] scrollbar scrollbar-thumb-gray-400] scrollbar-track-gray-300">
			<TopBar />

			<section className="flex flex-col items-center justify-center gap-8 h-[890px] mt-[54px] border border-green-400">
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
