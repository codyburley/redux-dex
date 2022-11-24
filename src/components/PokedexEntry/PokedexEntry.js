import React from 'react'
import './PokedexEntry.scss'

const PokedexEntry = ({ entry_number, pokemon_species }) => {
  const capitalName = pokemon_species.name.charAt(0).toUpperCase() + pokemon_species.name.slice(1);
  return (
    <article className='entry'>
      <div className='entry__container'>
        {entry_number}
        {capitalName}
      </div>
      <img
        className='entry__image'
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${entry_number}.png`}
        alt={pokemon_species.name}
      />
    </article>
  )
}

export default PokedexEntry