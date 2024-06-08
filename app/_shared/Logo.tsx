import _Logo from "@/public/pokemon-3.svg";
import Image from "next/image";
import { LogoPropType } from "../_types/propTypes";
import { FC } from "react";

const Logo: FC<LogoPropType> = ({ top, left, height, width }) => {
	return (
		<>
			<Image
				src={_Logo}
				alt="pokemon"
				width={width}
				height={height}
				className={`top-${top} left-${left}`}
			/>
		</>
	);
};

export default Logo;
