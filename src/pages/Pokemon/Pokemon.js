import React from 'react';
import './Pokemon.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Pokemon = () => {
  const pokeEntryNumber = useParams();
  const [selectedPoke, setSelectedPoke] = useState();
  const pokemon = useSelector(state => state.pokemonList.pokemon);

  useEffect(() => {
    const currentPoke = pokemon.find(poke => poke.entry_number == pokeEntryNumber.entry_number);
    setSelectedPoke(currentPoke);
  }, [])

  console.log(selectedPoke)

  if (!selectedPoke) {
    return <h1>Loading...</h1>
  }

  return (
    <div>Pokemon</div>
  )
}

export default Pokemon