import React from "react";

interface PokemonCardProps {
	name: string;
	image: string;
	types: string[];
	abilities: string[];
}

const PokemonCard = ({ name, image, types, abilities }: PokemonCardProps) => {
	return <div></div>;
};

export default PokemonCard;
