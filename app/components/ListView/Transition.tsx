/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import {
	DialogTitle,
	DialogPanel,
	Dialog,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { PokemonData } from "@/app/_types/pokemonData";
import { useAppContext } from "@/app/_context";

const TransitionPage = ({}) => {
	const { pokemonData, selectedCard, setSelectedCard } = useAppContext();
	const [pokemonDetail, setPokemonDetail] = useState<PokemonData>({});
	const [open, setOpen] = useState(false);
	const [minipage, setMinipage] = useState<string>("about");

	useEffect(() => {
		if (selectedCard !== "") {
			setOpen(true);
			setMinipage("about");

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

	return (
		<>
			<Transition show={open} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={setOpen}>
					<TransitionChild
						as={Fragment}
						enter="ease-in-out duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in-out duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
					</TransitionChild>

					<div className="fixed inset-0 h-[100dvh]">
						<div className="absolute inset-0">
							<div className="pointer-events-none fixed inset-y-0 right-0 flex h-[100dvh] overflow-y-scroll lg:pl-10 w-[100%] lg:w-[659px]">
								<TransitionChild
									as={Fragment}
									enter="transform transition ease-in-out duration-500 sm:duration-700"
									enterFrom="translate-x-full"
									enterTo="translate-x-0"
									leave="transform transition ease-in-out duration-500 sm:duration-700"
									leaveFrom="translate-x-0"
									leaveTo="translate-x-full"
								>
									<DialogPanel className="pointer-events-auto w-full">
										<div className="flex h-[900px] lg:h-[1024px] flex-col bg-white shadow-xl relative">
											<div className="sm:px-6">
												<div className="mb-[10px] flex items-center justify-between">
													<DialogTitle className="font-semibold px-[20px] old text-base leading-6 text-gray-900"></DialogTitle>
												</div>
											</div>

											<div className="w-[400px] sm:px-6">
												{/* Content */}
												<dialog className="flex flex-col h-[700px] lg:h-[1000px] w-[400px] lg:w-[580px]">
													<div className="w-[400px] lg:w-full lg:h-[340px] rounded-[15px] bg-custom-gradient flex flex-col items-center">
														<span className="flex-grow w-[390px] lg:w-[564px] ml-3 mt-3 h-10">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																className="size-5 h-[44px] w-[44px] bg-white rounded-[9px] cursor-pointer px-2"
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
															width={220}
															height={220}
															layout="fixed"
															objectFit="contain"
															className="bottom-[-30px] relative w-[200px] h-[200px] lg:w-[240px] lg:h-[240px]"
														/>
													</div>
													<div className="mt-[30px] lg:mt-[70px] flex flex-col gap-5 items-center justify-center">
														<h1
															className={`w-[115px] h-[30px] text-[39px] lg:text-[48px] font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
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

														<div className="flex flex-col justify-center items-center lg:mt-10">
															<span className="flex flex-col justify-center items-center">
																{minipage ===
																"about" ? (
																	<>
																		<h1
																			className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
																		>
																			About
																		</h1>
																		<div className="grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-0 w-[400px] h-[110px] lg:h-[120px] justify-center items-center bg-custom-gradient2 mt-2">
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
																			<div className="mt-7">
																				<ul>
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
																	</>
																) : minipage ===
																  "stats" ? (
																	<>
																		<h1
																			className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
																		>
																			Stats
																		</h1>
																		<div className="h-[220px] w-[480px] lg:h-[260px] lg:w-[510px] shadow-custom grid grid-cols-2 grid-rows-6 gap-x-7 mt-5">
																			<h1 className="flex justify-end">
																				HP
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.hp
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.hp
																					}
																				</span>
																			</span>

																			<h1 className="flex justify-end">
																				Attack
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.attack
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.attack
																					}
																				</span>
																			</span>

																			<h1 className="flex justify-end">
																				Defense
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.defense
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.defense
																					}
																				</span>
																			</span>

																			<h1 className="flex justify-end">
																				Special
																				Attack
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.special_attack
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.special_attack
																					}
																				</span>
																			</span>

																			<h1 className="flex justify-end">
																				Special
																				Defense
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.special_defense
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.special_defense
																					}
																				</span>
																			</span>

																			<h1 className="flex justify-end">
																				Speed
																			</h1>
																			<span className="lg:ml-5">
																				<progress
																					className="progress progress-secondary w-[120px] lg:w-[180px]"
																					value={
																						pokemonDetail
																							.stats
																							?.speed
																					}
																					max="200"
																				></progress>
																				<span className="ml-2">
																					{
																						pokemonDetail
																							.stats
																							?.speed
																					}
																				</span>
																			</span>
																		</div>
																	</>
																) : (
																	<h1>
																		Coming
																		soon!
																	</h1>
																)}
															</span>

															<div className="h-[50px] w-[360px] lg:h-[64px] lg:w-[428px] rounded-[60px] bg-[#E9E9E9] absolute bottom-0 flex flex-row gap-4 justify-center items-center z-40 ">
																<span
																	onClick={() => {
																		setMinipage(
																			"about"
																		);
																	}}
																	className="h-[40px] lg:h-[48px] w-[105px] lg:w-[125px] flex justify-center items-center rounded-[60px] font-medium text-[16px] lg:text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
																>
																	About
																</span>
																<span
																	onClick={() => {
																		setMinipage(
																			"stats"
																		);
																	}}
																	className="h-[40px] lg:h-[48px] w-[105px] lg:w-[125px] flex justify-center items-center rounded-[60px] font-medium text-[16px] lg:text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
																>
																	Stats
																</span>
																<span
																	onClick={() => {
																		setMinipage(
																			"similar"
																		);
																	}}
																	className="h-[40px] lg:h-[48px] w-[105px] lg:w-[125px] flex justify-center items-center rounded-[60px] font-medium text-[16px] lg:text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
																>
																	Similar
																</span>
															</div>
														</div>
													</div>
												</dialog>
												{/* content end */}
											</div>
										</div>
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default TransitionPage;
