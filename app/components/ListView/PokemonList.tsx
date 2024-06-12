import React from "react";
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";

const PokemonList = () => {
	const { pokemonData, isLoading } = useAppContext();
	isLoading ? console.log("Loading...") : console.log(pokemonData);
	return (
		<section className="border-2 border-pink-400 h-[1050px] w-[90%] grid grid-cols-4 grid-rows-2 gap-3 gap-y-20 justify-center items-center mt-[10%] mb-[20px]">
			{!isLoading &&
				pokemonData.map((pokemon: PokemonData) => (
					<PokemonCard
						key={pokemon.id}
						name={pokemon.name}
						image={
							pokemon.sprites.other?.dream_world
								?.front_default
						}
						types={pokemon.types!}
					/>
				))}
		</section>
	);
};

export default PokemonList;
