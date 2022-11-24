import React from 'react'
import './PokedexEntry.scss'
import pokeballBackground from '../../assets/images/pokeball-background.png'

const PokedexEntry = ({ entry_number, pokemon_species }) => {
  // const capitalName = pokemon_species.name.charAt(0).toUpperCase() + pokemon_species.name.slice(1);
  const entryNumber = String(entry_number).padStart(3, 0);

  return (
    <article className='entry'>
      <div className='entry__container'>
        No.
        {entryNumber}
      </div>
      <div className='entry__image-container'>
        <img
          className='entry__image-background'
          src={pokeballBackground}
          alt='pokeball background'
        />
        <img
          className='entry__image'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${entry_number}.png`}
          alt={pokemon_species.name}
        />
      </div>
    </article>
  )
}

export default PokedexEntry