import { PokemonCardPropTypes } from "@/app/_types/propTypes";
import Image from "next/image";
import { FC } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";
import ViewPokemon from "./ViewPokemon";
import { useAppContext } from "@/app/_context";

const PokemonCard: FC<PokemonCardPropTypes> = ({ name, image, types }) => {
	const { setSelectedCard, theme } = useAppContext();

	return (
		<div
			className={`max-h-[230px] w-[180px] lg:w-full lg:max-h-[268px] rounded-2xl flex flex-col gap-3 items-center bg-white group transition-all duration-500 lg:hover:max-h-[329px] mb-10 lg:mb-0`}
		>
			{image ? (
				<span className="w-[170px] h-[140px] lg:w-[268px] lg:h-[168px] rounded-2xl bg-[#F1F1F1] flex items-center justify-center my-3 relative">
					<Image
						src={image}
						alt={name}
						width={180}
						height={150}
						className="absolute top-[-45px] w-[120px] h-[140px] lg:w-[180.77px] lg:h-[185.76px]"
					/>
				</span>
			) : (
				<div className="h-[190.76px] w-[186.77px] flex items-center justify-center border border-green-600">
					Image not available
				</div>
			)}

			<h2
				className={`w-[115px] h-[30px] text-[20px] lg:text-[24px] lg:font-[500] leading-[29.52px] ${clashDisplayVariable.className} flex justify-center items-center`}
			>
				{name.trim()}
			</h2>
			<div className="flex flex-row gap-2 rounded-[40px] h-[25px] w-[160px] lg:h-[30px] lg:w-[190px] justify-center items-center flex-grow">
				{types.map((type) => (
					<span
						key={type}
						className="bg-[#F6F6F6] font-[400] text-[14px] lg:text-[16px] lg:h-[30px] lg:w-[98px] flex flex-row items-center justify-center rounded-[40px] gap-3 px-[6px] py-1"
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
								w[0].toUpperCase() + w.slice(1).toLowerCase()
							);
						})}
					</span>
				))}
			</div>
			<div
				className={`opacity-0 group-hover:opacity-100 inset-0 w-[160px] lg:w-[268px] lg:h-[46px] mb-2 rounded-[14px] bg-[#${theme}] cursor-pointer`}
				onClick={() => setSelectedCard(name)}
			>
				<ViewPokemon />
			</div>
		</div>
	);
};

export default PokemonCard;
