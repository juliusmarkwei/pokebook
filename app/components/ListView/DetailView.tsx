/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import Image from "next/image";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData, PokemonData as Type } from "@/app/_types/pokemonData";

const PokemonDetail = ({ name }) => {
	const router = useRouter();
	const { pokemonData } = useAppContext();
	const [pokemonDetail, setPokemonDetail] = useState<PokemonData>({});

	const closeModal = () => {
		router.back(); // Navigate back to the previous page
	};

	useEffect(() => {
		const pokemon = pokemonData.find(
			(pokemon: PokemonData) => pokemon.name === name
		);
		if (pokemon) {
			setPokemonDetail(pokemon);
		}
	}, [name]);

	return (
		<div className="fixed inset-0 flex justify-end z-50">
			<div className="w-1/2 h-full bg-white p-6 overflow-auto">
				<button onClick={closeModal} className="mb-4 text-red-500">
					Close
				</button>

				<div className="text-center">
					<h1
						className={`text-3xl font-bold ${clashDisplayVariable.className}`}
					>
						{pokemonDetail.name}
					</h1>
					<Image
						height={319}
						width={312}
						src={
							pokemonDetail.sprites.other?.dream_world
								?.front_default
						}
						alt={name}
						className="my-4"
					/>
					<div className="flex flex-wrap justify-center gap-2">
						{pokemonDetail.types.map((type: any) => (
							<span
								key={type}
								className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-800"
							>
								{type}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="fixed inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg"></div>
		</div>
	);
};

export default PokemonDetail;
