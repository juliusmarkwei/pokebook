/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import { Dialog, Transition } from "@headlessui/react";

const PokemonList = () => {
	const { pokemonData, isLoading, selectedCard, setSelectedCard } =
		useAppContext();
	const [pokemonDetail, setPokemonDetail] = useState<PokemonData>({});
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (selectedCard !== "") {
			setOpen(true);

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
		setOpen(false);
	};

	const openSidebarMenu = () => {
		setOpen(true);
	};

	return (
		<section className="h-[95%] w-[90%] grid grid-cols-4 grid-rows-2 gap-3 gap-y-10 justify-center items-center">
			{!isLoading &&
				pokemonData.map((pokemon: PokemonData) => (
					<span key={pokemon.id}>
						<PokemonCard
							name={pokemon.name?.trim()}
							image={
								pokemon.sprites.other?.dream_world
									?.front_default ||
								pokemon.sprites.front_default
							}
							types={pokemon.types!}
						/>
					</span>
				))}

			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 h-[100dvh]">
						<div className="absolute inset-0">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex h-[100dvh] overflow-y-scroll pl-10 w-[659px]">
								<Transition.Child
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<Dialog.Panel className="pointer-events-auto w-full">
										<div className="flex h-[1024px] flex-col rounded-l-2xl bg-white shadow-xl">
											<div className="sm:px-6">
												<div className="mb-[10px] flex items-center justify-between">
													<Dialog.Title className="font-semibpx-[20px] old text-base leading-6 text-gray-900"></Dialog.Title>
												</div>
											</div>

											<div className="w-220 sm:px-6">
												{/* Content */}
												<dialog className="flex flex-col h-full w-dvh">
													<div className="w-[4625px] h-[340px] rounded-[15px] bg-custom-gradient flex flex-col items-center">
														<span className="flex-grow w-full ml-3 mt-3 h-10">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																className="size-6 h-[44px] w-[44px] bg-white rounded-[9px] cursor-pointer"
																onClick={
																	handleCloseModal
																}
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
																pokemonDetail
																	.sprites
																	?.other
																	?.dream_world
																	?.front_default ||
																pokemonDetail
																	.sprites
																	?.front_default
															}
															alt={pokemonDetail.name?.trim()}
															width={
																220
															}
															height={
																220
															}
															layout="fixed"
															objectFit="contain"
															className="bottom-[-30px] relative"
														/>
													</div>
													<div className="mt-[50px] flex flex-col gap-2 items-center justify-center">
														<h1
															className={`w-[115px] h-[30px] text-[24px] font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
														>
															{pokemonDetail.name?.trim()}
														</h1>
														<div className="flex flex-row gap-2 rounded-[40px] h-[30px] w-[190px] justify-center items-center flex-grow">
															{pokemonDetail.types?.map(
																(
																	type: string
																) => (
																	<span
																		key={
																			type
																		}
																		className="bg-[#F6F6F6] font-[400] text-[16px] h-[30px] w-[98px] flex flex-row items-center justify-center rounded-[40px] gap-3 px-1"
																	>
																		{type ==
																		"fire"
																			? "🔥"
																			: type ==
																			  "water"
																			? "💧"
																			: type ==
																			  "grass"
																			? "🌿"
																			: type ==
																			  "bug"
																			? "🐞"
																			: type ==
																			  "normal"
																			? "🐻"
																			: type ==
																			  "poison"
																			? "☠️"
																			: type ==
																			  "electric"
																			? "⚡"
																			: type ==
																			  "ground"
																			? "🌍"
																			: type ==
																			  "fairy"
																			? "🧚"
																			: type ==
																			  "fighting"
																			? "🥊"
																			: type ==
																			  "psychic"
																			? "🔮"
																			: type ==
																			  "rock"
																			? "🪨"
																			: type ==
																			  "ghost"
																			? "👻"
																			: type ==
																			  "ice"
																			? "🧊"
																			: type ==
																			  "dragon"
																			? "🐉"
																			: type ==
																			  "dark"
																			? "🦇"
																			: type ==
																			  "steel"
																			? "⛓️"
																			: type ==
																			  "flying"
																			? "🦋"
																			: null}{" "}
																		{type
																			?.trim()
																			?.replace(
																				/\w+/g,
																				function (
																					w
																				) {
																					return (
																						w[0].toUpperCase() +
																						w
																							.slice(
																								1
																							)
																							.toLowerCase()
																					);
																				}
																			)}
																	</span>
																)
															)}
														</div>
														<div className="flex flex-col justify-center items-center mt-10">
															<h1
																className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
															>
																About
															</h1>
															<div className="grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-0 w-[400px] h-[120px] justify-center items-center-custom-gradient2 mt-5">
																<div className="flex justify-end">
																	Height
																</div>
																<div
																	className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200]`}
																>
																	{
																		pokemonDetail.height
																	}
																</div>
																<div className="flex justify-end">
																	Weight
																</div>
																<div
																	className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200]`}
																>
																	{
																		pokemonDetail.weight
																	}
																</div>
																<div className="flex justify-end">
																	Abilities
																</div>
																<div>
																	<ul className="">
																		{pokemonDetail.abilities?.map(
																			(
																				ability: string,
																				index: number
																			) => (
																				<li
																					key={
																						index
																					}
																					className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200] list-disc ml-5`}
																				>
																					{
																						ability
																					}
																				</li>
																			)
																		)}
																	</ul>
																</div>
															</div>
															{/* <div className="mt-10 h-[84px] w-[428px] rounded-[8px] bg-[#E9E9E9]"></div> */}
														</div>
													</div>
												</dialog>
												{/* content end */}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</section>
	);
};

export default PokemonList;
