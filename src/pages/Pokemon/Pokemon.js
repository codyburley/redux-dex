import React from 'react';
import './Pokemon.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import Abilities from '../../components/Abilities/Abilities';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

const Pokemon = () => {
  const pokeEntryNumber = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState()
  const pokemon = useSelector(state => state.pokemonList.pokemon);

  useEffect(() => {
    const currentPoke = pokemon.find(poke => poke.entry_number == pokeEntryNumber.entry_number);
    P.getPokemonByName(currentPoke.entry_number)
      .then((response) => {
        setSelectedPokemon(response);
        setSelectedPokemon(state => ({
          ...state,
          caught: currentPoke.caught,
          entry_number: currentPoke.entry_number
        }))
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [pokeEntryNumber.entry_number, pokemon])

  if (!selectedPokemon) {
    return <h1>Loading...</h1>
  }

  return (
    <main className='pokemon'>
      <Hero
        sprites={selectedPokemon.sprites}
        name={selectedPokemon.name}
        caught={selectedPokemon.caught}
        entry_number={selectedPokemon.entry_number}
      />
      <Description />
      <Abilities />
    </main>
  )
}

export default Pokemon