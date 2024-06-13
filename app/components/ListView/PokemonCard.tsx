import { PokemonCardPropTypes } from "@/app/_types/propTypes";
import Image from "next/image";
import { FC, useState } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import ViewPokemon from "./ViewPokemon";
import Link from "next/link";
import DetailView from "@/app/components/ListView/DetailView";
import { useAppContext } from "@/app/_context/pokemonContext";
import { PokemonData } from "@/app/_types/pokemonData";

const PokemonCard: FC<PokemonCardPropTypes> = ({ name, image, types }) => {
	const { pokemonData, setSelectedCard } = useAppContext();
	// const [pokemonDetail, setPokemonDetail] = useState<PokemonData>({});

	return (
		<div
			className={`hover:h-[329px] h-[268px] w-[288px] rounded-2xl flex flex-col gap-3 items-center bg-white group transition-all duration-200 delay-200`}
		>
			{image ? (
				<span className="w-[268px] h-[168px] rounded-2xl bg-[#F1F1F1] flex items-center justify-center my-3 relative">
					<Image
						src={image}
						alt={name}
						width={180}
						height={150}
						className="absolute top-[-40px]"
					/>
				</span>
			) : (
				<div className="h-[190.76px] w-[186.77px] flex items-center justify-center border border-green-600">
					Image not available
				</div>
			)}

			<h2
				className={`w-[115px] h-[30px] text-[24px] font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
			>
				{name.trim()}
			</h2>
			<div className="flex flex-row gap-2 rounded-[40px] h-[30px] w-[190px] justify-center items-center flex-grow">
				{types.map((type) => (
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
						{type.replace(/\w+/g, function (w) {
							return (
								w[0].toUpperCase() +
								w.slice(1).toLowerCase()
							);
						})}
					</span>
				))}
			</div>
			<div
				className="opacity-0 group-hover:opacity-100 inset-0 w-[268px] h-[46px] rounded-[14px] bg-[#E85382] cursor-pointer"
				onClick={() => setSelectedCard(name)}
			>
				<ViewPokemon />
			</div>
		</div>
	);
};

export default PokemonCard;
