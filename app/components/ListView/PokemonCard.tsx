import { PokemonCardPropTypes } from "@/app/_types/propTypes";
import Image from "next/image";
import { FC } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";

const PokemonCard: FC<PokemonCardPropTypes> = ({ name, image, types }) => {
	console.log(image);
	return (
		<div className="h-[288px] w-[288px] rounded-2xl flex flex-col gap-3 items-center bg-white">
			{image ? (
				<span className="w-[268px] h-[148px] rounded-2xl bg-[#F1F1F1] flex items-center justify-center my-3">
					<Image
						src={image}
						alt={name}
						width={190.76}
						height={186.77}
						className=" relative top-[-45px]"
					/>
				</span>
			) : (
				<div className="h-[190.76px] w-[186.77px] flex items-center justify-center border border-green-600">
					Image not available
				</div>
			)}

			<h2
				className={`w-[115px] h-[30px] text-[24px] font-[500] leading-[29.52px] ${clashDisplayVariable.className}`}
			>
				{name}
			</h2>
			<div className="flex flex-row gap-2 rounded-[40px] h-[30px] w-[190px] justify-center items-center">
				{types.map((type) => (
					<span
						key={type}
						className="bg-[#F6F6F6] font-[400] text-[16px] h-[30px] w-[90px] flex flex-row items-center justify-center rounded-[40px] gap-3 p-2"
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
							? "🐾"
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
						{type}
					</span>
				))}
			</div>
		</div>
	);
};

export default PokemonCard;
