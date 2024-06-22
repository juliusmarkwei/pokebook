"use client";

import TopBar from "../../components/ListView/TopBar";
import PokemonList from "../../components/ListView/PokemonList";
import Pagination from "../../components/ListView/Pagination";
import PageSizeSelector from "../../components/ListView/PageSizeSelector";
import { useAppContext } from "../../_context";
import Typewriter from "typewriter-effect";

const Pokemon = () => {
	const { isLoading, theme } = useAppContext();

	return (
		<main className="bg-[#F6F6F6] w-dvh h-[1024px] scrollbar scrollbar-thumb-gray-300] scrollbar-track-gray-200">
			<TopBar />

			{isLoading ? (
				<span className="text-black flex justify-center mt-[60%] lg:mt-[30%]">
					<Typewriter
						options={{ loop: true, delay: 100 }}
						onInit={(typewriter) => {
							typewriter
								.typeString("Loading...")
								.pauseFor(2500)
								.deleteAll()
								.start();
						}}
					/>
				</span>
			) : (
				<section className="flex flex-col items-center justify-center gap-7 h-[790px] mt-[50px]">
					<PokemonList />
					<div className="flex flex-row items-center w-[85%]">
						<span className="flex-grow">
							<Pagination />
						</span>
						<PageSizeSelector />
					</div>
				</section>
			)}
		</main>
	);
};

export default Pokemon;
