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
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  const [pageSize, setPageSize] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchDetailedData, setFetchDetailedData] = useState<boolean>(false);
  const [selectedPageNumber, setSelectedPageNumber] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [showColorTheme, setShowColorTheme] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("#E85382");

  useEffect(() => {
    setIsLoading(true);

    const fetchLinks = async () => {
      await fetchPokemonLinks(pageSize, (selectedPageNumber + 1) * pageSize);
    };

    fetchLinks();
    console.log("------------------- Links fetched");
  }, [pageSize, selectedPageNumber]);

  useEffect(() => {
    if (pokemonLinks.length > 0) {
      const updatedData = pokemonLinks.map((link: PokemonLink) => ({
        id: parseInt(link.url.split("/")[6]),
        name: link.name,
      }));

      setPokemonData(updatedData);
      setFetchDetailedData(true); // Trigger fetching detailed data
      console.log(
        "--------------------------- Done setting name and id from link"
      );
      console.log(`updated data is ${JSON.stringify(updatedData)}`);
    }
  }, [pokemonLinks]);

  useEffect(() => {
    const fetchDataForAllPokemon = async () => {
      console.log(
        "------------------------- Starting to fetch actual pokemon data"
      );
      const updatedData = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const data = await fetchPokemonData(pokemon.name);
          console.log(`data: ${data.name}`);
          if (data) {
            return {
              ...pokemon,
              id: data.id,
              types: data.types.map((type: any) => type.type.name),
              height: data.height,
              weight: data.weight,
              sprites: {
                front_default: data.sprites.front_default,
                other: {
                  dream_world: {
                    front_default: data.sprites.other.dream_world.front_default,
                  },
                },
              },
              abilities: data.abilities.map(
                (ability: any) => ability.ability.name
              ),
              stats: {
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                special_attack: data.stats[3].base_stat,
                special_defense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
              },
              similar: [],
            };
          }
          return pokemon;
        })
      );
      console.log(
        "------------------------- Completed fetch of actual pokemon data"
      );
      setPokemonData(updatedData);
      setIsLoading(false);
      setFetchDetailedData(false); // Reset the trigger
    };

    if (fetchDetailedData) {
      fetchDataForAllPokemon();
    }
  }, [fetchDetailedData]); // Trigger fetching detailed data only when fetchDetailedData is true

  // Fetch pokemon links
  const fetchPokemonLinks = async (limit: number, offset: Number) => {
    try {
      const response = await fetch(`/api/pokemon-links/${limit}/${offset}`);
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

  const contextData = {
    pokemonData,
    pageSize,
    setPageSize,
    isLoading,
    selectedPageNumber,
    setSelectedPageNumber,
    selectedCard,
    setSelectedCard,
    showColorTheme,
    setShowColorTheme,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
