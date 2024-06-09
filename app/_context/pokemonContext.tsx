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
			await fetchPokemonLinks();
		};

		fetchLinks();
	}, []);

	useEffect(() => {
		if (pokemonLinks.length > 0) {
			const updatedData = pokemonLinks.map((link: PokemonLink) => ({
				name: link.name,
				id: parseInt(link.url.split("/")[6]), // Assuming the ID is a number
			}));

			_setPokemonData((prev: PokemonData[]) => [
				...prev,
				...updatedData,
			]);

			console.log("Length of pokemonData", _pokemonData.length);
		}
	}, [pokemonLinks]);

	// fetch pokemon links
	const fetchPokemonLinks = async () => {
		try {
			const response = await fetch("/api/pokemon-links");
			if (response.ok) {
				const data = await response.json();
				setPokemonLinks(data);
				console.log(data);
				console.log(
					"pokemonLinks",
					JSON.stringify(pokemonLinks) ?? "No data"
				);
			}
		} catch (error) {
			console.error(error);
		}
	};

	// fetch actual pokemon data
	const fetchPokemonData = async (name: string) => {
		try {
			const response = await fetch(`/api/pokemon/${name}`);
			if (response.ok) {
				const data = await response.json();
				// setPokemonData((prev: PokemonData[] | null) => {
				// 	return;
				// });
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<AppContext.Provider value={{ _pokemonData }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
