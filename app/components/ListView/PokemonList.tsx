import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";

const PokemonList = () => {
	const { pokemonData, isLoading } = useAppContext();
	return (
		<section className="h-[95%] w-[90%] grid grid-cols-4 grid-rows-2 gap-3 gap-y-10 justify-center items-center border border-black">
			{!isLoading &&
				pokemonData.map((pokemon: PokemonData) => (
					<PokemonCard
						key={pokemon.id}
						name={pokemon.name}
						image={
							pokemon.sprites.other?.dream_world
								?.front_default ||
							pokemon.sprites.front_default
						}
						types={pokemon.types!}
					/>
				))}
		</section>
	);
};

export default PokemonList;
