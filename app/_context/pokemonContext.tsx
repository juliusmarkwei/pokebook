/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect, useContext, createContext } from "react";
import { PokemonData, PokemonLink } from "@/app/_types/pokemonData";

const AppContext = createContext<any>([]);

export const ContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [pokemonLinks, setPokemonLinks] = useState<PokemonLink[]>([]);
	const [_pokemonData, _setPokemonData] = useState<PokemonData[]>([]);

	useEffect(() => {
		const fetchLinks = async () => {
			await fetchPokemonLinks(5);
		};

		fetchLinks();
	}, []);

	useEffect(() => {
		if (pokemonLinks.length > 0) {
			const updatedData = pokemonLinks.map((link: PokemonLink) => ({
				name: link.name,
				id: parseInt(link.url.split("/")[6]),
			}));

			_setPokemonData((prev: PokemonData[]) => [
				...prev,
				...updatedData,
			]);
		}
	}, [pokemonLinks]);

	// Fetch pokemon links
	const fetchPokemonLinks = async (limit: number) => {
		try {
			const response = await fetch(`/api/pokemon-links/${limit}`);
			if (response.ok) {
				const data = await response.json();
				setPokemonLinks(data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// Fetch actual pokemon data
	const fetchPokemonData = async (name: string) => {
		try {
			const response = await fetch(`/api/pokemon/${name}`);
			if (response.ok) {
				const data = await response.json();
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const fetchDataForAllPokemon = async () => {
			for (const pokemon of _pokemonData) {
				const data = await fetchPokemonData(pokemon.name);
				if (data) {
					_setPokemonData((prev) => {
						const existingPokemonIndex = prev.findIndex(
							(p) => p.name === pokemon.name
						);
						const updatedPokemon = {
							...prev[existingPokemonIndex],
							id: data.id,
							types: data.types.map(
								(type: any) => type.type.name
							),
							height: data.height,
							weight: data.weight,
							sprites: {
								front_default:
									data.sprites.front_default,
							},
							abilities: data.abilities.map(
								(ability: any) => ability.ability.name
							),
							stats: {
								hp: data.stats[0].base_stat,
								attack: data.stats[1].base_stat,
								defense: data.stats[2].base_stat,
								special_attack: data.stats[3].base_stat,
								special_defense:
									data.stats[4].base_stat,
								speed: data.stats[5].base_stat,
							},
							similar: [],
						};
						return [
							...prev.slice(0, existingPokemonIndex),
							updatedPokemon,
							...prev.slice(existingPokemonIndex + 1),
						];
					});
				}
			}
		};

		if (_pokemonData.length > 0) {
			fetchDataForAllPokemon();
		}
	}, [_pokemonData]);

	return (
		<AppContext.Provider value={{ _pokemonData }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
