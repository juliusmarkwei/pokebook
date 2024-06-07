import _Logo from "@/public/pokemon-3.svg";
import Image from "next/image";
import { LogoPropType } from "../_types/propTypes";

const Logo = ({ height, width }: LogoPropType) => {
	return (
		<>
			<Image src={_Logo} alt="pokemon" width={width} height={height} />
		</>
	);
};

export default Logo;
