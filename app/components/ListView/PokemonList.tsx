/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context";
import { PokemonData } from "@/app/_types/pokemonData";
import TransitionPage from "./Transition";

const PokemonList = () => {
	const { pokemonData, isLoading, pageSize } = useAppContext();

	return (
		<section
			className={`h-[95%] w-[90%] lg:grid lg:grid-cols-4 lg:grid-rows-${
				pageSize === 8
					? 2
					: pageSize === 12
					? 3
					: pageSize === 16
					? 4
					: 4
			} gap-x-3 lg:gap-y-10 justify-center items-center flex flex-row flex-wrap lg:my-auto overflow-y-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-200 py-8 lg:py-0`}
		>
			{!isLoading &&
				pokemonData.map((pokemon: PokemonData) => (
					<PokemonCard
						key={pokemon.id}
						name={pokemon.name?.trim()}
						image={
							pokemon.sprites.other?.dream_world?.front_default ||
							pokemon.sprites.front_default
						}
						types={pokemon.types!}
					/>
				))}
			<TransitionPage />
		</section>
	);
};

export default PokemonList;
