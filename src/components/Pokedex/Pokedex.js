import React from 'react'
import './Pokedex.scss'
import { useSelector, useDispatch } from 'react-redux'
import PokedexEntry from '../PokedexEntry/PokedexEntry';

const Pokedex = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector(state => state.pokemonList)

  return (
    <div>
      {pokemon.map((poke, i) => {
        return <PokedexEntry key={i} {...poke} />
      })}
    </div>
  )
}

export default Pokedex