import { PokemonCardPropTypes } from "@/app/_types/propTypes";
import Image from "next/image";
import { FC } from "react";
import { clashDisplayVariable } from "@/app/_shared/Constants";

const PokemonCard: FC<PokemonCardPropTypes> = ({ name, image, types }) => {
	console.log(image);
	return (
		<div className="h-[288px] w-[288px] rounded-lg flex flex-col gap-2 items-center justify-center bg-white border border-black">
			{image ? (
				<Image
					src={image}
					alt={name}
					width={190.76}
					height={186.77}
					className="border border-green-600"
				/>
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
			<div className="flex flex-row gap-2 rounded-[40px] h-[30px] w-[87px]">
				{types.map((type) => (
					<span
						key={type}
						className="bg-[#F6F6F6] font-sans font-[400] text-[16px] h-[22px] w-[63px] flex items-center justify-center"
					>
						{type}
					</span>
				))}
			</div>
		</div>
	);
};

export default PokemonCard;
