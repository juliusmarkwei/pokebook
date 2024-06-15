/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";
import TransitionPage from "./Transition";

const PokemonList = () => {
  const { pokemonData, isLoading } = useAppContext();

  return (
    <section className="h-[95%] w-[90%] grid grid-cols-4 grid-rows-2 gap-3 gap-y-10 justify-center items-center">
      {!isLoading &&
        pokemonData.map((pokemon: PokemonData) => (
          <span key={pokemon.id}>
            <PokemonCard
              name={pokemon.name?.trim()}
              image={
                pokemon.sprites.other?.dream_world?.front_default ||
                pokemon.sprites.front_default
              }
              types={pokemon.types!}
            />
          </span>
        ))}
      <TransitionPage />
    </section>
  );
};

export default PokemonList;
