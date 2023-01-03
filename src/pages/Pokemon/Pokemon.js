import React from "react";
import "./Pokemon.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Description from "../../components/Description/Description";
import Abilities from "../../components/Abilities/Abilities";
import Pokedex from "pokedex-promise-v2";
import HomeButton from "../../components/HomeButton/HomeButton";

const P = new Pokedex();

const Pokemon = () => {
  const pokeEntryNumber = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [caught, setCaught] = useState();
  const pokemon = useSelector((state) => state.pokemonList.pokemonCaught);

  useEffect(() => {
    const isCaught = pokemon.find(
      (p) => p === Number(pokeEntryNumber.entry_number)
    );
    isCaught ? setCaught(true) : setCaught(false);
    P.getPokemonByName(pokeEntryNumber.entry_number)
      .then((response) => {
        setSelectedPokemon(response);
        setSelectedPokemon((state) => ({
          ...state,
          entry_number: pokeEntryNumber.entry_number,
        }));
      })
      .catch((error) => {
        console.log("There was an ERROR: ", error);
      });
  }, [pokeEntryNumber.entry_number, pokemon]);

  if (!selectedPokemon) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="pokemon">
      <Hero
        sprites={selectedPokemon.sprites}
        name={selectedPokemon.name}
        caught={caught}
        entry_number={selectedPokemon.entry_number}
      />
      <Description
        entry_number={selectedPokemon.entry_number}
        types={selectedPokemon.types}
        weight={selectedPokemon.weight}
        height={selectedPokemon.height}
      />
      <Abilities abilityArray={selectedPokemon.abilities} />
      <HomeButton />
    </main>
  );
};

export default Pokemon;
