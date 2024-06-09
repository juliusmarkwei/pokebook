export interface PokemonData {
	id?: number;
	name?: string;
	types?: string[];
	height?: number;
	weight?: number;
	sprites?: {
		front_default: string;
	};
	abilities?: string[];
	stats?: {
		hp: number;
		attack: number;
		defense: number;
		special_attack: number;
		special_defense: number;
		speed: number;
	};
	similar?: {
		name: string;
		image: string;
	}[];
}

export interface PokemonLink {
	name: string;
	url: string;
}
