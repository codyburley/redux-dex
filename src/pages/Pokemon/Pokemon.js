import React from 'react';
import './Pokemon.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [])

  if (!selectedPokemon) {
    return <h1>Loading...</h1>
  }

  console.log(selectedPokemon);

  return (
    <main>
      <Hero
        sprites={selectedPokemon.sprites}
        name={selectedPokemon.name}
        id={selectedPokemon.id}
      />
      <Description />
      <Abilities />
    </main>
  )
}

export default Pokemon