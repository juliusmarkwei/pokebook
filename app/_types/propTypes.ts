export interface LogoPropType {
	height: number;
	width: number;
	top?: number;
	left?: number;
}

export interface PokemonCardPropTypes {
	name: string;
	image: string;
	types: string[];
}

export interface PaginationProps {
	selectedPageNumber?: number;
	setSelectedPageNumber: (index: number) => void;
}
