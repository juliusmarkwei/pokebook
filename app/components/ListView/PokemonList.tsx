/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";

const PokemonList = () => {
	const { pokemonData, isLoading, selectedCard, setSelectedCard } =
		useAppContext();
	const [pokemonDetail, setPokemonDetail] = useState<PokemonData>({});

	useEffect(() => {
		if (selectedCard !== "") {
			const modal = document.getElementById(
				"my_modal_1"
			) as HTMLDialogElement;
			if (modal) {
				modal.showModal();
			}

			const filteredPokemon = pokemonData.filter(
				(pokemon: PokemonData) => pokemon.name === selectedCard
			);
			if (filteredPokemon.length > 0) {
				setPokemonDetail(filteredPokemon[0]);
				setSelectedCard("");
			}
		}
	}, [selectedCard]);

	const handleCloseModal = () => {
		const modal = document.getElementById(
			"my_modal_1"
		) as HTMLDialogElement;
		if (modal) modal.close();
	};

	return (
		<section className="h-[95%] w-[90%] grid grid-cols-4 grid-rows-2 gap-3 gap-y-10 justify-center items-center">
			{!isLoading &&
				pokemonData.map((pokemon: PokemonData) => (
					<span key={pokemon.id}>
						<PokemonCard
							name={pokemon.name.trim()}
							image={
								pokemon.sprites.other?.dream_world
									?.front_default ||
								pokemon.sprites.front_default
							}
							types={pokemon.types!}
						/>
					</span>
				))}

			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<dialog
				id="my_modal_1"
				className="modal h-[1024px] w-[480px] left-[881px] bg-white flex flex-col p-2"
			>
				<div className="w-[434px] h-[280px] rounded-[15px] bg-custom-gradient flex flex-col items-center">
					<span className="flex-grow w-full ml-3 mt-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-6 h-[44px] w-[44px] p-[8px] bg-white rounded-[9px] cursor-pointer"
							onClick={handleCloseModal}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
							/>
						</svg>
					</span>
					<Image
						src={
							pokemonDetail.sprites?.other?.dream_world
								?.front_default ||
							pokemonDetail.sprites?.front_default
						}
						alt={pokemonDetail.name.trim()}
						width={180}
						height={180}
						className="bottom-[-30px] relative"
					/>
				</div>
				<div className="mt-[40px] flex flex-col gap-2 items-center justify-center">
					<h1
						className={`w-[115px] h-[30px] text-[24px] font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
					>
						{pokemonDetail.name.trim()}
					</h1>
					<div className="flex flex-row gap-2 rounded-[40px] h-[30px] w-[190px] justify-center items-center flex-grow">
						{pokemonDetail.types?.map((type: string) => (
							<span
								key={type}
								className="bg-[#F6F6F6] font-[400] text-[16px] h-[30px] w-[98px] flex flex-row items-center justify-center rounded-[40px] gap-3 px-1"
							>
								{type == "fire"
									? "🔥"
									: type == "water"
									? "💧"
									: type == "grass"
									? "🌿"
									: type == "bug"
									? "🐞"
									: type == "normal"
									? "🐻"
									: type == "poison"
									? "☠️"
									: type == "electric"
									? "⚡"
									: type == "ground"
									? "🌍"
									: type == "fairy"
									? "🧚"
									: type == "fighting"
									? "🥊"
									: type == "psychic"
									? "🔮"
									: type == "rock"
									? "🪨"
									: type == "ghost"
									? "👻"
									: type == "ice"
									? "🧊"
									: type == "dragon"
									? "🐉"
									: type == "dark"
									? "🦇"
									: type == "steel"
									? "⛓️"
									: type == "flying"
									? "🦋"
									: null}{" "}
								{type
									.trim()
									.replace(/\w+/g, function (w) {
										return (
											w[0].toUpperCase() +
											w.slice(1).toLowerCase()
										);
									})}
							</span>
						))}
					</div>
					<div className="flex flex-col justify-center items-center mt-5">
						<h1
							className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
						>
							About
						</h1>
						<table className="flex flex-col justify-center items-center gap-3">
							<tr>
								<td
									className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[00]`}
								>
									Height
								</td>
								<td
									className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[600]`}
								>
									{pokemonDetail.height}
								</td>
							</tr>
							<tr>
								<td
									className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[00]`}
								>
									Weight
								</td>
								<td
									className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[600]`}
								>
									{pokemonDetail.weight}
								</td>
							</tr>
							<tr>
								<td
									className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[00]`}
								>
									Abilities
								</td>
								<td>
									<ol>
										{pokemonDetail.abilities?.map(
											(
												ability: string,
												index: number
											) => (
												<li
													key={index}
													className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[600]`}
												>
													{ability.trim()}
												</li>
											)
										)}
									</ol>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</dialog>
		</section>
	);
};

export default PokemonList;
