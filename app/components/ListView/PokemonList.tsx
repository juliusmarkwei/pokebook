/* eslint-disable react-hooks/exhaustive-deps */
import PokemonCard from "./PokemonCard";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import {
  DialogTitle,
  DialogPanel,
  Dialog,
  Transition,
  TransitionChild,
} from "@headlessui/react";

const PokemonList = () => {
  const { pokemonData, isLoading, selectedCard, setSelectedCard } =
    useAppContext();
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
              <div className="pointer-events-none fixed inset-y-0 right-0 flex h-[100dvh] overflow-y-scroll pl-10 w-[659px]">
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
                    <div className="flex h-[1024px] flex-col bg-white shadow-xl relative">
                      <div className="sm:px-6">
                        <div className="mb-[10px] flex items-center justify-between">
                          <DialogTitle className="font-semibpx-[20px] old text-base leading-6 text-gray-900"></DialogTitle>
                        </div>
                      </div>

                      <div className="w-220 sm:px-6">
                        {/* Content */}
                        <dialog className="flex flex-col h-[1000px] w-dvh">
                          <div className="w-full h-[340px] rounded-[15px] bg-custom-gradient flex flex-col items-center">
                            <span className="flex-grow w-[564px] ml-3 mt-3 h-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 h-[44px] w-[44px] bg-white rounded-[9px] cursor-pointer"
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
                              alt={pokemonDetail.name?.trim()}
                              width={220}
                              height={220}
                              layout="fixed"
                              objectFit="contain"
                              className="bottom-[-30px] relative"
                            />
                          </div>
                          <div className="mt-[70px] flex flex-col gap-5 items-center justify-center">
                            <h1
                              className={`w-[115px] h-[30px] text-[48px] font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
                            >
                              {pokemonDetail.name?.trim()}
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
                                  {type?.trim()?.replace(/\w+/g, function (w) {
                                    return (
                                      w[0].toUpperCase() +
                                      w.slice(1).toLowerCase()
                                    );
                                  })}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-col justify-center items-center mt-10">
                              <span className="flex flex-col justify-center items-center">
                                {minipage === "about" ? (
                                  <>
                                    <h1
                                      className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
                                    >
                                      About
                                    </h1>
                                    <div className="grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-0 w-[400px] h-[120px] justify-center items-center bg-custom-gradient2 mt-5">
                                      <div className="flex justify-end">
                                        Height
                                      </div>
                                      <div
                                        className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200]`}
                                      >
                                        {pokemonDetail.height}
                                      </div>
                                      <div className="flex justify-end">
                                        Weight
                                      </div>
                                      <div
                                        className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200]`}
                                      >
                                        {pokemonDetail.weight}
                                      </div>
                                      <div className="flex justify-end">
                                        Abilities
                                      </div>
                                      <div>
                                        <ul>
                                          {pokemonDetail.abilities?.map(
                                            (
                                              ability: string,
                                              index: number
                                            ) => (
                                              <li
                                                key={index}
                                                className={`${clashDisplayVariable.className} text-[20px] leading-[24.6px] font-[200] list-disc ml-5`}
                                              >
                                                {ability}
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </>
                                ) : minipage === "stats" ? (
                                  <>
                                    <h1
                                      className={`w-[75px] h-[30px] font-[600] text-[24px] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
                                    >
                                      Stats
                                    </h1>
                                    <div className="h-[260px] w-[510px] shadow-custom grid grid-cols-2 grid-rows-6 gap-x-8 mt-5">
                                      <h1 className="flex justify-end">HP</h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={pokemonDetail.stats?.hp}
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.hp}
                                        </span>
                                      </span>

                                      <h1 className="flex justify-end">
                                        Attack
                                      </h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={pokemonDetail.stats?.attack}
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.attack}
                                        </span>
                                      </span>

                                      <h1 className="flex justify-end">
                                        Defense
                                      </h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={pokemonDetail.stats?.defense}
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.defense}
                                        </span>
                                      </span>

                                      <h1 className="flex justify-end">
                                        Special Attack
                                      </h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={
                                            pokemonDetail.stats?.special_attack
                                          }
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.special_attack}
                                        </span>
                                      </span>

                                      <h1 className="flex justify-end">
                                        Special Defense
                                      </h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={
                                            pokemonDetail.stats?.special_defense
                                          }
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.special_defense}
                                        </span>
                                      </span>

                                      <h1 className="flex justify-end">
                                        Speed
                                      </h1>
                                      <span className="ml-5">
                                        <progress
                                          className="progress progress-secondary w-[189px]"
                                          value={pokemonDetail.stats?.speed}
                                          max="100"
                                        ></progress>
                                        <span className="ml-2">
                                          {pokemonDetail.stats?.speed}
                                        </span>
                                      </span>
                                    </div>
                                  </>
                                ) : (
                                  <h1>Coming soon!</h1>
                                )}
                              </span>

                              <div className="h-[64px] w-[428px] rounded-[60px] p-[8px] bg-[#E9E9E9] absolute bottom-5 flex flex-row gap-4 justify-center items-center">
                                <span
                                  onClick={() => {
                                    setMinipage("about");
                                  }}
                                  className="h-[48px] w-[132px] flex justify-center items-center rounded-[60px] py-[12px] px-[40px] font-medium text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
                                >
                                  About
                                </span>
                                <span
                                  onClick={() => {
                                    setMinipage("stats");
                                  }}
                                  className="h-[48px] w-[132px] flex justify-center items-center rounded-[60px] py-[12px] px-[40px] font-medium text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
                                >
                                  Stats
                                </span>
                                <span
                                  onClick={() => {
                                    setMinipage("similar");
                                  }}
                                  className="h-[48px] w-[132px] flex justify-center items-center rounded-[60px] py-[12px] px-[40px] font-medium text-[18px] leading-[24.3px] transition-colors duration-300 hover:bg-white cursor-pointer"
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
    </section>
  );
};

export default PokemonList;
